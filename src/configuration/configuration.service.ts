import { ConsoleLogger, Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { Log } from 'src/logs/entities/log.entity';
import { getConnection, getRepository, Repository } from 'typeorm';
import { Configuration } from './entities/configuration.entity';

@Injectable()
export class ConfigurationService {

    async findAll(filters: any) {
        try {
            // console.log(filters);
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
        console.log('creating configuration', form.data);
        const queryRunner = getConnection().createQueryRunner();
        await queryRunner.connect();

        try {
            return await queryRunner.manager.transaction(
                async (EntityManager) => {
                    switch (form.group) {
                        case 'email_templates':
                            let welcome_email = await Configuration.findOne({
                                group: form.group, name: 'welcome_email'
                            });

                            if (welcome_email) {
                                await EntityManager.update(Configuration, { group: form.group, name: 'welcome_email' }, { value: form.data.welcome_email });
                            }
                            else {
                                const _welcome_email = new Configuration();
                                _welcome_email.group = form.group;
                                _welcome_email.name = 'welcome_email';
                                _welcome_email.value = form.data.welcome_email;
                                _welcome_email.user_pk = user.pk;
                                welcome_email = await EntityManager.save(_welcome_email);
                            }

                            break;

                        case 'agreement':
                            let disclaimer = await Configuration.findOne({
                                group: form.group, name: 'disclaimer'
                            });

                            let legal = await Configuration.findOne({
                                group: form.group, name: 'legal'
                            });

                            let terms = await Configuration.findOne({
                                group: form.group, name: 'terms'
                            });

                            if (disclaimer) {
                                await EntityManager.update(Configuration, { group: form.group, name: 'disclaimer' }, { value: form.data.disclaimer });
                            }
                            else {
                                const _disclaimer = new Configuration();
                                _disclaimer.group = form.group;
                                _disclaimer.name = 'disclaimer';
                                _disclaimer.value = form.data.disclaimer;
                                _disclaimer.user_pk = user.pk;
                                disclaimer = await EntityManager.save(_disclaimer);
                            }

                            if (legal) {
                                await EntityManager.update(Configuration, { group: form.group, name: 'legal' }, { value: form.data.legal });
                            }
                            else {
                                const _legal = new Configuration();
                                _legal.group = form.group;
                                _legal.name = 'legal';
                                _legal.value = form.data.legal;
                                _legal.user_pk = user.pk;
                                legal = await EntityManager.save(_legal);
                            }

                            if (terms) {
                                await EntityManager.update(Configuration, { group: form.group, name: 'terms' }, { value: form.data.terms });
                            }
                            else {
                                const _terms = new Configuration();
                                _terms.group = form.group;
                                _terms.name = 'terms';
                                _terms.value = form.data.terms;
                                _terms.user_pk = user.pk;
                                terms = await EntityManager.save(_terms);
                            }
                            break;
                        default:
                            break;
                    }



                    // // LOGS
                    // // Disclaimer
                    // let log = new Log();
                    // log.model = 'configuration';
                    // log.model_pk = disclaimer.pk;
                    // log.details = JSON.stringify({
                    //     group: 'agreement',
                    //     name: 'disclaimer',
                    //     value: form.disclaimer
                    // });
                    // log.user_pk = user.pk;
                    // await EntityManager.save(log);

                    // // Legal Conditions
                    // log = new Log();
                    // log.model = 'configuration';
                    // log.model_pk = legal.pk;
                    // log.details = JSON.stringify({
                    //     group: 'agreement',
                    //     name: 'disclaimer',
                    //     value: form.legal
                    // });
                    // log.user_pk = user.pk;
                    // await EntityManager.save(log);

                    // // Legal Conditions
                    // log = new Log();
                    // log.model = 'configuration';
                    // log.model_pk = terms.pk;
                    // log.details = JSON.stringify({
                    //     group: 'agreement',
                    //     name: 'disclaimer',
                    //     value: form.terms
                    // });
                    // log.user_pk = user.pk;
                    // await EntityManager.save(log);

                    return { status: true, data: form };
                }
            );
        } catch (err) {
            console.log(err);
            return { status: false, code: err.code };
        } finally {
            await queryRunner.release();
        }
    }
}
