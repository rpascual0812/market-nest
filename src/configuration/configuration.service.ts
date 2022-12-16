import { ConsoleLogger, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Log } from 'src/logs/entities/log.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
import { Configuration } from './entities/configuration.entity';

@Injectable()
export class ConfigurationService {

    async findAll(filters: any) {
        try {
            console.log(filters);
            const configuration = await getRepository(Configuration)
                .createQueryBuilder('configuration')
                .select('configuration')
                .andWhere(
                    "configuration.group = :keyword",
                    { keyword: `${filters.group}` }
                )
                .leftJoinAndSelect("configuration.user", "users")
                .getManyAndCount()
                ;

            return {
                status: true,
                data: configuration[0],
                total: configuration[1]
            }
        } catch (error) {
            console.log(error);
            // SAVE ERROR
            return {
                status: false
            }
        }
    }

    @UsePipes(ValidationPipe)
    async save(form: any, user: any) {
        console.log('creating configuration', form);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    await EntityManager.update(Configuration, { group: 'agreement', name: 'disclaimer' }, { value: form.disclaimer });
                    await EntityManager.update(Configuration, { group: 'agreement', name: 'legal' }, { value: form.legal });
                    await EntityManager.update(Configuration, { group: 'agreement', name: 'terms' }, { value: form.terms });

                    const disclaimer = await Configuration.findOne({
                        group: 'agreement', name: 'disclaimer'
                    });

                    const legal = await Configuration.findOne({
                        group: 'agreement', name: 'legal'
                    });

                    const terms = await Configuration.findOne({
                        group: 'agreement', name: 'terms'
                    });

                    // LOGS
                    // Disclaimer
                    let log = new Log();
                    log.model = 'configuration';
                    log.model_pk = disclaimer.pk;
                    log.details = JSON.stringify({
                        group: 'agreement',
                        name: 'disclaimer',
                        value: form.disclaimer
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    // Legal Conditions
                    log = new Log();
                    log.model = 'configuration';
                    log.model_pk = legal.pk;
                    log.details = JSON.stringify({
                        group: 'agreement',
                        name: 'disclaimer',
                        value: form.legal
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    // Legal Conditions
                    log = new Log();
                    log.model = 'configuration';
                    log.model_pk = terms.pk;
                    log.details = JSON.stringify({
                        group: 'agreement',
                        name: 'disclaimer',
                        value: form.terms
                    });
                    log.user_pk = user.pk;
                    await EntityManager.save(log);

                    return { status: true, data: form };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            // console.log('finally...');
        }
    }
}
