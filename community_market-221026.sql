--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: adminpack; Type: EXTENSION; Schema: -; Owner: -
--

CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION adminpack; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: accounts; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.accounts (
    pk integer NOT NULL,
    username text NOT NULL,
    password text NOT NULL,
    active boolean DEFAULT true NOT NULL,
    verified boolean DEFAULT false NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.accounts OWNER TO samdhana;

--
-- Name: accounts_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.accounts_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.accounts_pk_seq OWNER TO samdhana;

--
-- Name: accounts_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.accounts_pk_seq OWNED BY public.accounts.pk;


--
-- Name: areas; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.areas (
    pk integer NOT NULL,
    name text NOT NULL,
    country_pk integer NOT NULL,
    province_pk integer NOT NULL,
    city_pk integer NOT NULL,
    user_pk integer NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.areas OWNER TO samdhana;

--
-- Name: areas_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.areas_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.areas_pk_seq OWNER TO samdhana;

--
-- Name: areas_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.areas_pk_seq OWNED BY public.areas.pk;


--
-- Name: article_documents; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.article_documents (
    pk integer NOT NULL,
    user_pk integer NOT NULL,
    article_pk integer NOT NULL,
    type text NOT NULL,
    document_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.article_documents OWNER TO samdhana;

--
-- Name: article_documents_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.article_documents_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.article_documents_pk_seq OWNER TO samdhana;

--
-- Name: article_documents_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.article_documents_pk_seq OWNED BY public.article_documents.pk;


--
-- Name: articles; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.articles (
    pk integer NOT NULL,
    title text NOT NULL,
    description text NOT NULL,
    user_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.articles OWNER TO samdhana;

--
-- Name: articles_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.articles_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.articles_pk_seq OWNER TO samdhana;

--
-- Name: articles_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.articles_pk_seq OWNED BY public.articles.pk;


--
-- Name: categories; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.categories (
    pk integer NOT NULL,
    name text NOT NULL,
    user_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.categories OWNER TO samdhana;

--
-- Name: categories_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.categories_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.categories_pk_seq OWNER TO samdhana;

--
-- Name: categories_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.categories_pk_seq OWNED BY public.categories.pk;


--
-- Name: chat_messages; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.chat_messages (
    pk bigint NOT NULL,
    chat_pk bigint NOT NULL,
    user_pk integer NOT NULL,
    message text,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL,
    read boolean DEFAULT false NOT NULL
);


ALTER TABLE public.chat_messages OWNER TO samdhana;

--
-- Name: chat_messages_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.chat_messages_pk_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chat_messages_pk_seq OWNER TO samdhana;

--
-- Name: chat_messages_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.chat_messages_pk_seq OWNED BY public.chat_messages.pk;


--
-- Name: chat_participants; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.chat_participants (
    pk bigint NOT NULL,
    chat_pk bigint NOT NULL,
    user_pk integer NOT NULL
);


ALTER TABLE public.chat_participants OWNER TO samdhana;

--
-- Name: chat_participants_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.chat_participants_pk_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chat_participants_pk_seq OWNER TO samdhana;

--
-- Name: chat_participants_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.chat_participants_pk_seq OWNED BY public.chat_participants.pk;


--
-- Name: chats; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.chats (
    pk bigint NOT NULL,
    uuid text,
    title text,
    last_message text,
    user_pk integer NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.chats OWNER TO samdhana;

--
-- Name: chats_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.chats_pk_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.chats_pk_seq OWNER TO samdhana;

--
-- Name: chats_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.chats_pk_seq OWNED BY public.chats.pk;


--
-- Name: cities; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.cities (
    pk integer NOT NULL,
    name text NOT NULL,
    country_pk integer NOT NULL,
    province_pk integer NOT NULL,
    user_pk integer NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.cities OWNER TO samdhana;

--
-- Name: cities_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.cities_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cities_pk_seq OWNER TO samdhana;

--
-- Name: cities_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.cities_pk_seq OWNED BY public.cities.pk;


--
-- Name: countries; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.countries (
    pk integer NOT NULL,
    code text NOT NULL,
    name text NOT NULL,
    dial_code integer NOT NULL,
    currency_name text NOT NULL,
    currency_symbol text NOT NULL,
    currency_code text NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    active boolean DEFAULT false NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.countries OWNER TO samdhana;

--
-- Name: countries_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.countries_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.countries_pk_seq OWNER TO samdhana;

--
-- Name: countries_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.countries_pk_seq OWNED BY public.countries.pk;


--
-- Name: documents; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.documents (
    pk integer NOT NULL,
    original_name text NOT NULL,
    filename text NOT NULL,
    path text NOT NULL,
    mime_type text NOT NULL,
    size numeric NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.documents OWNER TO samdhana;

--
-- Name: documents_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.documents_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.documents_pk_seq OWNER TO samdhana;

--
-- Name: documents_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.documents_pk_seq OWNED BY public.documents.pk;


--
-- Name: emails; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.emails (
    pk integer NOT NULL,
    uuid text NOT NULL,
    "from" text NOT NULL,
    from_name text NOT NULL,
    "to" text NOT NULL,
    to_name text NOT NULL,
    cc text,
    bcc text,
    subject text NOT NULL,
    body text NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    sent text DEFAULT false NOT NULL,
    archived boolean DEFAULT false NOT NULL,
    user_pk integer NOT NULL
);


ALTER TABLE public.emails OWNER TO samdhana;

--
-- Name: emails_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.emails_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.emails_pk_seq OWNER TO samdhana;

--
-- Name: emails_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.emails_pk_seq OWNED BY public.emails.pk;


--
-- Name: genders; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.genders (
    pk integer NOT NULL,
    name text NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.genders OWNER TO samdhana;

--
-- Name: genders_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.genders_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.genders_pk_seq OWNER TO samdhana;

--
-- Name: genders_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.genders_pk_seq OWNED BY public.genders.pk;


--
-- Name: inquiries; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.inquiries (
    pk integer NOT NULL,
    uuid text NOT NULL,
    name text NOT NULL,
    email text NOT NULL,
    subject text NOT NULL,
    message text NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.inquiries OWNER TO samdhana;

--
-- Name: inquiries_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.inquiries_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.inquiries_pk_seq OWNER TO samdhana;

--
-- Name: inquiries_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.inquiries_pk_seq OWNED BY public.inquiries.pk;


--
-- Name: logs; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.logs (
    pk bigint NOT NULL,
    model text NOT NULL,
    model_pk integer NOT NULL,
    details jsonb,
    user_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.logs OWNER TO samdhana;

--
-- Name: logs_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.logs_pk_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.logs_pk_seq OWNER TO samdhana;

--
-- Name: logs_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.logs_pk_seq OWNED BY public.logs.pk;


--
-- Name: measurements; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.measurements (
    pk integer NOT NULL,
    symbol text NOT NULL,
    name text NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.measurements OWNER TO samdhana;

--
-- Name: measurements_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.measurements_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.measurements_pk_seq OWNER TO samdhana;

--
-- Name: measurements_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.measurements_pk_seq OWNED BY public.measurements.pk;


--
-- Name: migrations; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.migrations (
    id integer NOT NULL,
    "timestamp" bigint NOT NULL,
    name character varying NOT NULL
);


ALTER TABLE public.migrations OWNER TO samdhana;

--
-- Name: migrations_id_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.migrations_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.migrations_id_seq OWNER TO samdhana;

--
-- Name: migrations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.migrations_id_seq OWNED BY public.migrations.id;


--
-- Name: notifications; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.notifications (
    pk bigint NOT NULL,
    title text,
    details text,
    user_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.notifications OWNER TO samdhana;

--
-- Name: notifications_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.notifications_pk_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.notifications_pk_seq OWNER TO samdhana;

--
-- Name: notifications_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.notifications_pk_seq OWNED BY public.notifications.pk;


--
-- Name: orders; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.orders (
    pk integer NOT NULL,
    uuid text NOT NULL,
    user_pk integer NOT NULL,
    product_pk integer NOT NULL,
    quantity numeric(10,2) DEFAULT '0'::numeric NOT NULL,
    measurement_pk integer NOT NULL,
    price numeric(10,2) DEFAULT '0'::numeric NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    status_pk integer NOT NULL,
    archived boolean DEFAULT false NOT NULL,
    seller_pk integer
);


ALTER TABLE public.orders OWNER TO samdhana;

--
-- Name: orders_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.orders_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.orders_pk_seq OWNER TO samdhana;

--
-- Name: orders_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.orders_pk_seq OWNED BY public.orders.pk;


--
-- Name: permissions; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.permissions (
    pk bigint NOT NULL,
    parent text NOT NULL,
    "group" text NOT NULL,
    name text NOT NULL,
    details jsonb,
    user_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.permissions OWNER TO samdhana;

--
-- Name: permissions_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.permissions_pk_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.permissions_pk_seq OWNER TO samdhana;

--
-- Name: permissions_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.permissions_pk_seq OWNED BY public.permissions.pk;


--
-- Name: product_documents; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.product_documents (
    pk integer NOT NULL,
    user_pk integer NOT NULL,
    type text NOT NULL,
    document_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    product_pk integer NOT NULL,
    "default" boolean DEFAULT false NOT NULL
);


ALTER TABLE public.product_documents OWNER TO samdhana;

--
-- Name: product_documents_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.product_documents_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_documents_pk_seq OWNER TO samdhana;

--
-- Name: product_documents_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.product_documents_pk_seq OWNED BY public.product_documents.pk;


--
-- Name: product_ratings; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.product_ratings (
    pk integer NOT NULL,
    user_pk integer NOT NULL,
    product_pk integer NOT NULL,
    rating numeric(10,2) DEFAULT '0'::numeric NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    message text,
    anonymous boolean DEFAULT false NOT NULL
);


ALTER TABLE public.product_ratings OWNER TO samdhana;

--
-- Name: product_ratings_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.product_ratings_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.product_ratings_pk_seq OWNER TO samdhana;

--
-- Name: product_ratings_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.product_ratings_pk_seq OWNED BY public.product_ratings.pk;


--
-- Name: products; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.products (
    pk integer NOT NULL,
    uuid text NOT NULL,
    user_pk integer NOT NULL,
    type text NOT NULL,
    name text NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL,
    measurement_pk integer NOT NULL,
    country_pk integer NOT NULL,
    description text NOT NULL,
    quantity numeric(10,2) DEFAULT '0'::numeric NOT NULL,
    price_from numeric(10,2) DEFAULT '0'::numeric NOT NULL,
    price_to numeric(10,2) DEFAULT '0'::numeric NOT NULL,
    category_pk integer NOT NULL
);


ALTER TABLE public.products OWNER TO samdhana;

--
-- Name: products_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.products_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.products_pk_seq OWNER TO samdhana;

--
-- Name: products_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.products_pk_seq OWNED BY public.products.pk;


--
-- Name: provinces; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.provinces (
    pk integer NOT NULL,
    name text NOT NULL,
    country_pk integer NOT NULL,
    active boolean DEFAULT false NOT NULL,
    user_pk integer NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.provinces OWNER TO samdhana;

--
-- Name: provinces_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.provinces_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.provinces_pk_seq OWNER TO samdhana;

--
-- Name: provinces_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.provinces_pk_seq OWNED BY public.provinces.pk;


--
-- Name: roles; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.roles (
    pk bigint NOT NULL,
    name text NOT NULL,
    details text,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.roles OWNER TO samdhana;

--
-- Name: roles_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.roles_pk_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.roles_pk_seq OWNER TO samdhana;

--
-- Name: roles_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.roles_pk_seq OWNED BY public.roles.pk;


--
-- Name: seller_addresses; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.seller_addresses (
    pk integer NOT NULL,
    type text NOT NULL,
    "default" boolean DEFAULT false NOT NULL,
    province_pk integer NOT NULL,
    city_pk integer NOT NULL,
    area_pk integer NOT NULL,
    address text NOT NULL,
    seller_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.seller_addresses OWNER TO samdhana;

--
-- Name: seller_addresses_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.seller_addresses_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seller_addresses_pk_seq OWNER TO samdhana;

--
-- Name: seller_addresses_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.seller_addresses_pk_seq OWNED BY public.seller_addresses.pk;


--
-- Name: sellers; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.sellers (
    pk integer NOT NULL,
    uuid text NOT NULL,
    user_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL,
    mobile_number text NOT NULL,
    about text
);


ALTER TABLE public.sellers OWNER TO samdhana;

--
-- Name: sellers_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.sellers_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sellers_pk_seq OWNER TO samdhana;

--
-- Name: sellers_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.sellers_pk_seq OWNED BY public.sellers.pk;


--
-- Name: sessions; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.sessions (
    pk integer NOT NULL,
    token text NOT NULL,
    expiration timestamp with time zone,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    account_pk integer
);


ALTER TABLE public.sessions OWNER TO samdhana;

--
-- Name: sessions_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.sessions_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sessions_pk_seq OWNER TO samdhana;

--
-- Name: sessions_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.sessions_pk_seq OWNED BY public.sessions.pk;


--
-- Name: slider_documents; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.slider_documents (
    pk integer NOT NULL,
    user_pk integer NOT NULL,
    slider_pk integer NOT NULL,
    type text NOT NULL,
    document_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.slider_documents OWNER TO samdhana;

--
-- Name: slider_documents_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.slider_documents_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.slider_documents_pk_seq OWNER TO samdhana;

--
-- Name: slider_documents_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.slider_documents_pk_seq OWNED BY public.slider_documents.pk;


--
-- Name: sliders; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.sliders (
    pk integer NOT NULL,
    type text NOT NULL,
    title text NOT NULL,
    details text NOT NULL,
    user_pk integer NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.sliders OWNER TO samdhana;

--
-- Name: sliders_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.sliders_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.sliders_pk_seq OWNER TO samdhana;

--
-- Name: sliders_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.sliders_pk_seq OWNED BY public.sliders.pk;


--
-- Name: statuses; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.statuses (
    pk integer NOT NULL,
    type text NOT NULL,
    name text NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL,
    user_pk integer NOT NULL
);


ALTER TABLE public.statuses OWNER TO samdhana;

--
-- Name: statuses_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.statuses_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.statuses_pk_seq OWNER TO samdhana;

--
-- Name: statuses_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.statuses_pk_seq OWNED BY public.statuses.pk;


--
-- Name: ticket_messages; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.ticket_messages (
    pk integer NOT NULL,
    user_pk integer NOT NULL,
    message text NOT NULL,
    ticket_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.ticket_messages OWNER TO samdhana;

--
-- Name: ticket_messages_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.ticket_messages_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.ticket_messages_pk_seq OWNER TO samdhana;

--
-- Name: ticket_messages_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.ticket_messages_pk_seq OWNED BY public.ticket_messages.pk;


--
-- Name: tickets; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.tickets (
    pk integer NOT NULL,
    uuid text NOT NULL,
    user_pk integer NOT NULL,
    category text NOT NULL,
    subject text NOT NULL,
    status text NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.tickets OWNER TO samdhana;

--
-- Name: tickets_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.tickets_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.tickets_pk_seq OWNER TO samdhana;

--
-- Name: tickets_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.tickets_pk_seq OWNED BY public.tickets.pk;


--
-- Name: typeorm_metadata; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.typeorm_metadata (
    type character varying NOT NULL,
    database character varying,
    schema character varying,
    "table" character varying,
    name character varying,
    value text
);


ALTER TABLE public.typeorm_metadata OWNER TO samdhana;

--
-- Name: user_addresses; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.user_addresses (
    pk integer NOT NULL,
    type text NOT NULL,
    province_pk integer NOT NULL,
    city_pk integer NOT NULL,
    area_pk integer NOT NULL,
    address text NOT NULL,
    user_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    "default" boolean DEFAULT false NOT NULL
);


ALTER TABLE public.user_addresses OWNER TO samdhana;

--
-- Name: user_addresses_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.user_addresses_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_addresses_pk_seq OWNER TO samdhana;

--
-- Name: user_addresses_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.user_addresses_pk_seq OWNED BY public.user_addresses.pk;


--
-- Name: user_cart; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.user_cart (
    pk integer NOT NULL,
    user_pk integer NOT NULL,
    product_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    product integer
);


ALTER TABLE public.user_cart OWNER TO samdhana;

--
-- Name: user_cart_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.user_cart_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_cart_pk_seq OWNER TO samdhana;

--
-- Name: user_cart_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.user_cart_pk_seq OWNED BY public.user_cart.pk;


--
-- Name: user_documents; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.user_documents (
    pk integer NOT NULL,
    user_pk integer NOT NULL,
    type text NOT NULL,
    document_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.user_documents OWNER TO samdhana;

--
-- Name: user_documents_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.user_documents_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_documents_pk_seq OWNER TO samdhana;

--
-- Name: user_documents_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.user_documents_pk_seq OWNED BY public.user_documents.pk;


--
-- Name: user_follow; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.user_follow (
    pk integer NOT NULL,
    user_pk integer NOT NULL,
    created_by integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.user_follow OWNER TO samdhana;

--
-- Name: user_follow_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.user_follow_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_follow_pk_seq OWNER TO samdhana;

--
-- Name: user_follow_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.user_follow_pk_seq OWNED BY public.user_follow.pk;


--
-- Name: user_permissions; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.user_permissions (
    pk integer NOT NULL,
    permission_pk bigint NOT NULL,
    user_pk integer NOT NULL
);


ALTER TABLE public.user_permissions OWNER TO samdhana;

--
-- Name: user_permissions_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.user_permissions_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_permissions_pk_seq OWNER TO samdhana;

--
-- Name: user_permissions_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.user_permissions_pk_seq OWNED BY public.user_permissions.pk;


--
-- Name: user_ratings; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.user_ratings (
    pk integer NOT NULL,
    rating numeric(10,2) DEFAULT '0'::numeric NOT NULL,
    user_pk integer NOT NULL,
    created_by integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    message text
);


ALTER TABLE public.user_ratings OWNER TO samdhana;

--
-- Name: user_ratings_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.user_ratings_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.user_ratings_pk_seq OWNER TO samdhana;

--
-- Name: user_ratings_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.user_ratings_pk_seq OWNED BY public.user_ratings.pk;


--
-- Name: users; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.users (
    pk integer NOT NULL,
    uuid text NOT NULL,
    last_name text NOT NULL,
    first_name text NOT NULL,
    middle_name text,
    gender_pk integer,
    birthdate date NOT NULL,
    mobile_number text NOT NULL,
    account_pk integer NOT NULL,
    archived boolean DEFAULT false NOT NULL,
    email_address text NOT NULL,
    country_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    role_pk bigint NOT NULL,
    about text,
    is_seller boolean DEFAULT false NOT NULL
);


ALTER TABLE public.users OWNER TO samdhana;

--
-- Name: users_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.users_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.users_pk_seq OWNER TO samdhana;

--
-- Name: users_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.users_pk_seq OWNED BY public.users.pk;


--
-- Name: validations; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.validations (
    pk integer NOT NULL,
    type text NOT NULL,
    value text NOT NULL,
    status text NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL,
    archived boolean DEFAULT false NOT NULL
);


ALTER TABLE public.validations OWNER TO samdhana;

--
-- Name: validations_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.validations_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.validations_pk_seq OWNER TO samdhana;

--
-- Name: validations_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.validations_pk_seq OWNED BY public.validations.pk;


--
-- Name: accounts pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.accounts ALTER COLUMN pk SET DEFAULT nextval('public.accounts_pk_seq'::regclass);


--
-- Name: areas pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.areas ALTER COLUMN pk SET DEFAULT nextval('public.areas_pk_seq'::regclass);


--
-- Name: article_documents pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.article_documents ALTER COLUMN pk SET DEFAULT nextval('public.article_documents_pk_seq'::regclass);


--
-- Name: articles pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.articles ALTER COLUMN pk SET DEFAULT nextval('public.articles_pk_seq'::regclass);


--
-- Name: categories pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.categories ALTER COLUMN pk SET DEFAULT nextval('public.categories_pk_seq'::regclass);


--
-- Name: chat_messages pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chat_messages ALTER COLUMN pk SET DEFAULT nextval('public.chat_messages_pk_seq'::regclass);


--
-- Name: chat_participants pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chat_participants ALTER COLUMN pk SET DEFAULT nextval('public.chat_participants_pk_seq'::regclass);


--
-- Name: chats pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chats ALTER COLUMN pk SET DEFAULT nextval('public.chats_pk_seq'::regclass);


--
-- Name: cities pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.cities ALTER COLUMN pk SET DEFAULT nextval('public.cities_pk_seq'::regclass);


--
-- Name: countries pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.countries ALTER COLUMN pk SET DEFAULT nextval('public.countries_pk_seq'::regclass);


--
-- Name: documents pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.documents ALTER COLUMN pk SET DEFAULT nextval('public.documents_pk_seq'::regclass);


--
-- Name: emails pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.emails ALTER COLUMN pk SET DEFAULT nextval('public.emails_pk_seq'::regclass);


--
-- Name: genders pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.genders ALTER COLUMN pk SET DEFAULT nextval('public.genders_pk_seq'::regclass);


--
-- Name: inquiries pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.inquiries ALTER COLUMN pk SET DEFAULT nextval('public.inquiries_pk_seq'::regclass);


--
-- Name: logs pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.logs ALTER COLUMN pk SET DEFAULT nextval('public.logs_pk_seq'::regclass);


--
-- Name: measurements pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.measurements ALTER COLUMN pk SET DEFAULT nextval('public.measurements_pk_seq'::regclass);


--
-- Name: migrations id; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.migrations ALTER COLUMN id SET DEFAULT nextval('public.migrations_id_seq'::regclass);


--
-- Name: notifications pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.notifications ALTER COLUMN pk SET DEFAULT nextval('public.notifications_pk_seq'::regclass);


--
-- Name: orders pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.orders ALTER COLUMN pk SET DEFAULT nextval('public.orders_pk_seq'::regclass);


--
-- Name: permissions pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.permissions ALTER COLUMN pk SET DEFAULT nextval('public.permissions_pk_seq'::regclass);


--
-- Name: product_documents pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_documents ALTER COLUMN pk SET DEFAULT nextval('public.product_documents_pk_seq'::regclass);


--
-- Name: product_ratings pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_ratings ALTER COLUMN pk SET DEFAULT nextval('public.product_ratings_pk_seq'::regclass);


--
-- Name: products pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.products ALTER COLUMN pk SET DEFAULT nextval('public.products_pk_seq'::regclass);


--
-- Name: provinces pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.provinces ALTER COLUMN pk SET DEFAULT nextval('public.provinces_pk_seq'::regclass);


--
-- Name: roles pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.roles ALTER COLUMN pk SET DEFAULT nextval('public.roles_pk_seq'::regclass);


--
-- Name: seller_addresses pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_addresses ALTER COLUMN pk SET DEFAULT nextval('public.seller_addresses_pk_seq'::regclass);


--
-- Name: sellers pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sellers ALTER COLUMN pk SET DEFAULT nextval('public.sellers_pk_seq'::regclass);


--
-- Name: sessions pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sessions ALTER COLUMN pk SET DEFAULT nextval('public.sessions_pk_seq'::regclass);


--
-- Name: slider_documents pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.slider_documents ALTER COLUMN pk SET DEFAULT nextval('public.slider_documents_pk_seq'::regclass);


--
-- Name: sliders pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sliders ALTER COLUMN pk SET DEFAULT nextval('public.sliders_pk_seq'::regclass);


--
-- Name: statuses pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.statuses ALTER COLUMN pk SET DEFAULT nextval('public.statuses_pk_seq'::regclass);


--
-- Name: ticket_messages pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.ticket_messages ALTER COLUMN pk SET DEFAULT nextval('public.ticket_messages_pk_seq'::regclass);


--
-- Name: tickets pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.tickets ALTER COLUMN pk SET DEFAULT nextval('public.tickets_pk_seq'::regclass);


--
-- Name: user_addresses pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_addresses ALTER COLUMN pk SET DEFAULT nextval('public.user_addresses_pk_seq'::regclass);


--
-- Name: user_cart pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_cart ALTER COLUMN pk SET DEFAULT nextval('public.user_cart_pk_seq'::regclass);


--
-- Name: user_documents pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_documents ALTER COLUMN pk SET DEFAULT nextval('public.user_documents_pk_seq'::regclass);


--
-- Name: user_follow pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_follow ALTER COLUMN pk SET DEFAULT nextval('public.user_follow_pk_seq'::regclass);


--
-- Name: user_permissions pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_permissions ALTER COLUMN pk SET DEFAULT nextval('public.user_permissions_pk_seq'::regclass);


--
-- Name: user_ratings pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_ratings ALTER COLUMN pk SET DEFAULT nextval('public.user_ratings_pk_seq'::regclass);


--
-- Name: users pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.users ALTER COLUMN pk SET DEFAULT nextval('public.users_pk_seq'::regclass);


--
-- Name: validations pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.validations ALTER COLUMN pk SET DEFAULT nextval('public.validations_pk_seq'::regclass);


--
-- Data for Name: accounts; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.accounts (pk, username, password, active, verified, archived) FROM stdin;
113	email@gmail.com	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	t	f
114	rpascual0812@gmail.com.au	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
118	rpascual0812@gmail.com.aua	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
119	rpascual0813@gmail.com.au	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
120	rpascual0814@gmail.com.au	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
122	rpascual0815@gmail.com.au	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
123	rpascual0816@gmail.com.au	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
124	rpascual0817@gmail.com.au	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
127	rpascual0810@gmail.com.au	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
130	rpascual0802@gmail.com.au	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
133	rpascual0803@gmail.com.au	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
134	rpascual0804@gmail.com	$2b$10$czFGPBlp8zQ0uPOn7xWhtOxOHIkQN1.OmQ2yY7z4bSowSE2SjmzrK	t	f	f
135	email01@gmail.com	$2b$10$.8fMVF1e23muTL0sycGpsOznXemhG3JaxxvKkbDUDhLe.jiI.B9T6	t	f	f
\.


--
-- Data for Name: areas; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.areas (pk, name, country_pk, province_pk, city_pk, user_pk, archived) FROM stdin;
1	Area 1	173	3	2	4	f
\.


--
-- Data for Name: article_documents; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.article_documents (pk, user_pk, article_pk, type, document_pk, date_created) FROM stdin;
1	19	1	background	33	2022-10-08 15:30:58.387874+08
2	19	2	background	36	2022-10-08 16:08:40.585509+08
3	19	3	background	37	2022-10-08 16:08:40.598647+08
\.


--
-- Data for Name: articles; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.articles (pk, title, description, user_pk, date_created, archived) FROM stdin;
1	Magic Temple	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	19	2022-10-08 14:57:38.921818+08	f
2	Batang X	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	19	2022-10-08 16:07:57.372157+08	f
3	Aladdin	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	19	2022-10-08 16:07:57.376816+08	f
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.categories (pk, name, user_pk, date_created, archived) FROM stdin;
1	Vegetables	4	2022-10-13 05:00:07.426061+08	t
2	Fruits	4	2022-10-13 05:00:07.434987+08	f
3	Seeds	4	2022-10-13 05:00:07.440535+08	f
4	Herbs	4	2022-10-13 05:00:07.444911+08	f
\.


--
-- Data for Name: chat_messages; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.chat_messages (pk, chat_pk, user_pk, message, date_created, archived, read) FROM stdin;
\.


--
-- Data for Name: chat_participants; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.chat_participants (pk, chat_pk, user_pk) FROM stdin;
\.


--
-- Data for Name: chats; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.chats (pk, uuid, title, last_message, user_pk, archived) FROM stdin;
\.


--
-- Data for Name: cities; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.cities (pk, name, country_pk, province_pk, user_pk, archived) FROM stdin;
2	Pasig	173	3	4	f
\.


--
-- Data for Name: countries; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.countries (pk, code, name, dial_code, currency_name, currency_symbol, currency_code, date_created, active, archived) FROM stdin;
1	AF	Afghanistan	93	Afghan afghani	Ø‹	AFN	2022-09-23 19:11:09.409447+08	f	f
2	AL	Albania	355	Albanian lek	L	ALL	2022-09-23 19:11:09.409447+08	f	f
3	DZ	Algeria	213	Algerian dinar	Ø¯.Ø¬	DZD	2022-09-23 19:11:09.409447+08	f	f
4	AS	American Samoa	1684				2022-09-23 19:11:09.409447+08	f	f
5	AD	Andorra	376	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
6	AO	Angola	244	Angolan kwanza	Kz	AOA	2022-09-23 19:11:09.409447+08	f	f
7	AI	Anguilla	1264	East Caribbean dolla	$	XCD	2022-09-23 19:11:09.409447+08	f	f
8	AQ	Antarctica	0				2022-09-23 19:11:09.409447+08	f	f
9	AG	Antigua And Barbuda	1268	East Caribbean dolla	$	XCD	2022-09-23 19:11:09.409447+08	f	f
10	AR	Argentina	54	Argentine peso	$	ARS	2022-09-23 19:11:09.409447+08	f	f
11	AM	Armenia	374	Armenian dram		AMD	2022-09-23 19:11:09.409447+08	f	f
12	AW	Aruba	297	Aruban florin	Æ’	AWG	2022-09-23 19:11:09.409447+08	f	f
13	AU	Australia	61	Australian dollar	$	AUD	2022-09-23 19:11:09.409447+08	f	f
14	AT	Austria	43	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
15	AZ	Azerbaijan	994	Azerbaijani manat		AZN	2022-09-23 19:11:09.409447+08	f	f
16	BS	Bahamas The	1242				2022-09-23 19:11:09.409447+08	f	f
17	BH	Bahrain	973	Bahraini dinar	.Ø¯.Ø¨	BHD	2022-09-23 19:11:09.409447+08	f	f
18	BD	Bangladesh	880	Bangladeshi taka	à§³	BDT	2022-09-23 19:11:09.409447+08	f	f
19	BB	Barbados	1246	Barbadian dollar	$	BBD	2022-09-23 19:11:09.409447+08	f	f
20	BY	Belarus	375	Belarusian ruble	Br	BYR	2022-09-23 19:11:09.409447+08	f	f
21	BE	Belgium	32	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
22	BZ	Belize	501	Belize dollar	$	BZD	2022-09-23 19:11:09.409447+08	f	f
23	BJ	Benin	229	West African CFA fra	Fr	XOF	2022-09-23 19:11:09.409447+08	f	f
24	BM	Bermuda	1441	Bermudian dollar	$	BMD	2022-09-23 19:11:09.409447+08	f	f
25	BT	Bhutan	975	Bhutanese ngultrum	Nu.	BTN	2022-09-23 19:11:09.409447+08	f	f
26	BO	Bolivia	591	Bolivian boliviano	Bs.	BOB	2022-09-23 19:11:09.409447+08	f	f
27	BA	Bosnia and Herzegovina	387	Bosnia and Herzegovi	KM or ÐšÐœ	BAM	2022-09-23 19:11:09.409447+08	f	f
28	BW	Botswana	267	Botswana pula	P	BWP	2022-09-23 19:11:09.409447+08	f	f
29	BV	Bouvet Island	0				2022-09-23 19:11:09.409447+08	f	f
30	BR	Brazil	55	Brazilian real	R$	BRL	2022-09-23 19:11:09.409447+08	f	f
31	IO	British Indian Ocean Territory	246	United States dollar	$	USD	2022-09-23 19:11:09.409447+08	f	f
32	BN	Brunei	673	Brunei dollar	$	BND	2022-09-23 19:11:09.409447+08	f	f
33	BG	Bulgaria	359	Bulgarian lev	Ð»Ð²	BGN	2022-09-23 19:11:09.409447+08	f	f
34	BF	Burkina Faso	226	West African CFA fra	Fr	XOF	2022-09-23 19:11:09.409447+08	f	f
35	BI	Burundi	257	Burundian franc	Fr	BIF	2022-09-23 19:11:09.409447+08	f	f
36	KH	Cambodia	855	Cambodian riel	áŸ›	KHR	2022-09-23 19:11:09.409447+08	f	f
37	CM	Cameroon	237	Central African CFA 	Fr	XAF	2022-09-23 19:11:09.409447+08	f	f
38	CA	Canada	1	Canadian dollar	$	CAD	2022-09-23 19:11:09.409447+08	f	f
39	CV	Cape Verde	238	Cape Verdean escudo	Esc or $	CVE	2022-09-23 19:11:09.409447+08	f	f
40	KY	Cayman Islands	1345	Cayman Islands dolla	$	KYD	2022-09-23 19:11:09.409447+08	f	f
41	CF	Central African Republic	236	Central African CFA 	Fr	XAF	2022-09-23 19:11:09.409447+08	f	f
42	TD	Chad	235	Central African CFA 	Fr	XAF	2022-09-23 19:11:09.409447+08	f	f
43	CL	Chile	56	Chilean peso	$	CLP	2022-09-23 19:11:09.409447+08	f	f
44	CN	China	86	Chinese yuan	Â¥ or å…ƒ	CNY	2022-09-23 19:11:09.409447+08	f	f
45	CX	Christmas Island	61				2022-09-23 19:11:09.409447+08	f	f
46	CC	Cocos (Keeling) Islands	672	Australian dollar	$	AUD	2022-09-23 19:11:09.409447+08	f	f
47	CO	Colombia	57	Colombian peso	$	COP	2022-09-23 19:11:09.409447+08	f	f
48	KM	Comoros	269	Comorian franc	Fr	KMF	2022-09-23 19:11:09.409447+08	f	f
49	CG	Congo	242				2022-09-23 19:11:09.409447+08	f	f
50	CD	Congo The Democratic Republic Of The	242				2022-09-23 19:11:09.409447+08	f	f
51	CK	Cook Islands	682	New Zealand dollar	$	NZD	2022-09-23 19:11:09.409447+08	f	f
52	CR	Costa Rica	506	Costa Rican colÃ³n	â‚¡	CRC	2022-09-23 19:11:09.409447+08	f	f
53	CI	Cote D'Ivoire (Ivory Coast)	225				2022-09-23 19:11:09.409447+08	f	f
54	HR	Croatia (Hrvatska)	385				2022-09-23 19:11:09.409447+08	f	f
55	CU	Cuba	53	Cuban convertible pe	$	CUC	2022-09-23 19:11:09.409447+08	f	f
56	CY	Cyprus	357	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
57	CZ	Czech Republic	420	Czech koruna	KÄ	CZK	2022-09-23 19:11:09.409447+08	f	f
58	DK	Denmark	45	Danish krone	kr	DKK	2022-09-23 19:11:09.409447+08	f	f
59	DJ	Djibouti	253	Djiboutian franc	Fr	DJF	2022-09-23 19:11:09.409447+08	f	f
60	DM	Dominica	1767	East Caribbean dolla	$	XCD	2022-09-23 19:11:09.409447+08	f	f
61	DO	Dominican Republic	1809	Dominican peso	$	DOP	2022-09-23 19:11:09.409447+08	f	f
62	TP	East Timor	670	United States dollar	$	USD	2022-09-23 19:11:09.409447+08	f	f
63	EC	Ecuador	593	United States dollar	$	USD	2022-09-23 19:11:09.409447+08	f	f
64	EG	Egypt	20	Egyptian pound	Â£ or Ø¬.Ù…	EGP	2022-09-23 19:11:09.409447+08	f	f
65	SV	El Salvador	503	United States dollar	$	USD	2022-09-23 19:11:09.409447+08	f	f
66	GQ	Equatorial Guinea	240	Central African CFA 	Fr	XAF	2022-09-23 19:11:09.409447+08	f	f
67	ER	Eritrea	291	Eritrean nakfa	Nfk	ERN	2022-09-23 19:11:09.409447+08	f	f
68	EE	Estonia	372	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
69	ET	Ethiopia	251	Ethiopian birr	Br	ETB	2022-09-23 19:11:09.409447+08	f	f
70	XA	External Territories of Australia	61				2022-09-23 19:11:09.409447+08	f	f
71	FK	Falkland Islands	500	Falkland Islands pou	Â£	FKP	2022-09-23 19:11:09.409447+08	f	f
72	FO	Faroe Islands	298	Danish krone	kr	DKK	2022-09-23 19:11:09.409447+08	f	f
73	FJ	Fiji Islands	679				2022-09-23 19:11:09.409447+08	f	f
74	FI	Finland	358	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
75	FR	France	33	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
76	GF	French Guiana	594				2022-09-23 19:11:09.409447+08	f	f
77	PF	French Polynesia	689	CFP franc	Fr	XPF	2022-09-23 19:11:09.409447+08	f	f
78	TF	French Southern Territories	0				2022-09-23 19:11:09.409447+08	f	f
79	GA	Gabon	241	Central African CFA 	Fr	XAF	2022-09-23 19:11:09.409447+08	f	f
80	GM	Gambia The	220				2022-09-23 19:11:09.409447+08	f	f
81	GE	Georgia	995	Georgian lari	áƒš	GEL	2022-09-23 19:11:09.409447+08	f	f
82	DE	Germany	49	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
83	GH	Ghana	233	Ghana cedi	â‚µ	GHS	2022-09-23 19:11:09.409447+08	f	f
84	GI	Gibraltar	350	Gibraltar pound	Â£	GIP	2022-09-23 19:11:09.409447+08	f	f
85	GR	Greece	30	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
86	GL	Greenland	299				2022-09-23 19:11:09.409447+08	f	f
87	GD	Grenada	1473	East Caribbean dolla	$	XCD	2022-09-23 19:11:09.409447+08	f	f
88	GP	Guadeloupe	590				2022-09-23 19:11:09.409447+08	f	f
89	GU	Guam	1671				2022-09-23 19:11:09.409447+08	f	f
90	GT	Guatemala	502	Guatemalan quetzal	Q	GTQ	2022-09-23 19:11:09.409447+08	f	f
91	XU	Guernsey and Alderney	44				2022-09-23 19:11:09.409447+08	f	f
92	GN	Guinea	224	Guinean franc	Fr	GNF	2022-09-23 19:11:09.409447+08	f	f
93	GW	Guinea-Bissau	245	West African CFA fra	Fr	XOF	2022-09-23 19:11:09.409447+08	f	f
94	GY	Guyana	592	Guyanese dollar	$	GYD	2022-09-23 19:11:09.409447+08	f	f
95	HT	Haiti	509	Haitian gourde	G	HTG	2022-09-23 19:11:09.409447+08	f	f
96	HM	Heard and McDonald Islands	0				2022-09-23 19:11:09.409447+08	f	f
97	HN	Honduras	504	Honduran lempira	L	HNL	2022-09-23 19:11:09.409447+08	f	f
98	HK	Hong Kong S.A.R.	852				2022-09-23 19:11:09.409447+08	f	f
99	HU	Hungary	36	Hungarian forint	Ft	HUF	2022-09-23 19:11:09.409447+08	f	f
100	IS	Iceland	354	Icelandic krÃ³na	kr	ISK	2022-09-23 19:11:09.409447+08	f	f
101	IN	India	91	Indian rupee	â‚¹	INR	2022-09-23 19:11:09.409447+08	f	f
102	ID	Indonesia	62	Indonesian rupiah	Rp	IDR	2022-09-23 19:11:09.409447+08	f	f
103	IR	Iran	98	Iranian rial	ï·¼	IRR	2022-09-23 19:11:09.409447+08	f	f
104	IQ	Iraq	964	Iraqi dinar	Ø¹.Ø¯	IQD	2022-09-23 19:11:09.409447+08	f	f
105	IE	Ireland	353	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
106	IL	Israel	972	Israeli new shekel	â‚ª	ILS	2022-09-23 19:11:09.409447+08	f	f
107	IT	Italy	39	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
108	JM	Jamaica	1876	Jamaican dollar	$	JMD	2022-09-23 19:11:09.409447+08	f	f
109	JP	Japan	81	Japanese yen	Â¥	JPY	2022-09-23 19:11:09.409447+08	f	f
110	XJ	Jersey	44	British pound	Â£	GBP	2022-09-23 19:11:09.409447+08	f	f
111	JO	Jordan	962	Jordanian dinar	Ø¯.Ø§	JOD	2022-09-23 19:11:09.409447+08	f	f
112	KZ	Kazakhstan	7	Kazakhstani tenge		KZT	2022-09-23 19:11:09.409447+08	f	f
113	KE	Kenya	254	Kenyan shilling	Sh	KES	2022-09-23 19:11:09.409447+08	f	f
114	KI	Kiribati	686	Australian dollar	$	AUD	2022-09-23 19:11:09.409447+08	f	f
115	KP	Korea North	850				2022-09-23 19:11:09.409447+08	f	f
116	KR	Korea South	82				2022-09-23 19:11:09.409447+08	f	f
117	KW	Kuwait	965	Kuwaiti dinar	Ø¯.Ùƒ	KWD	2022-09-23 19:11:09.409447+08	f	f
118	KG	Kyrgyzstan	996	Kyrgyzstani som	Ð»Ð²	KGS	2022-09-23 19:11:09.409447+08	f	f
119	LA	Laos	856	Lao kip	â‚­	LAK	2022-09-23 19:11:09.409447+08	f	f
120	LV	Latvia	371	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
121	LB	Lebanon	961	Lebanese pound	Ù„.Ù„	LBP	2022-09-23 19:11:09.409447+08	f	f
122	LS	Lesotho	266	Lesotho loti	L	LSL	2022-09-23 19:11:09.409447+08	f	f
123	LR	Liberia	231	Liberian dollar	$	LRD	2022-09-23 19:11:09.409447+08	f	f
124	LY	Libya	218	Libyan dinar	Ù„.Ø¯	LYD	2022-09-23 19:11:09.409447+08	f	f
125	LI	Liechtenstein	423	Swiss franc	Fr	CHF	2022-09-23 19:11:09.409447+08	f	f
126	LT	Lithuania	370	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
127	LU	Luxembourg	352	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
128	MO	Macau S.A.R.	853				2022-09-23 19:11:09.409447+08	f	f
129	MK	Macedonia	389				2022-09-23 19:11:09.409447+08	f	f
130	MG	Madagascar	261	Malagasy ariary	Ar	MGA	2022-09-23 19:11:09.409447+08	f	f
131	MW	Malawi	265	Malawian kwacha	MK	MWK	2022-09-23 19:11:09.409447+08	f	f
132	MY	Malaysia	60	Malaysian ringgit	RM	MYR	2022-09-23 19:11:09.409447+08	f	f
133	MV	Maldives	960	Maldivian rufiyaa	.Þƒ	MVR	2022-09-23 19:11:09.409447+08	f	f
134	ML	Mali	223	West African CFA fra	Fr	XOF	2022-09-23 19:11:09.409447+08	f	f
135	MT	Malta	356	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
136	XM	Man (Isle of)	44				2022-09-23 19:11:09.409447+08	f	f
137	MH	Marshall Islands	692	United States dollar	$	USD	2022-09-23 19:11:09.409447+08	f	f
138	MQ	Martinique	596				2022-09-23 19:11:09.409447+08	f	f
139	MR	Mauritania	222	Mauritanian ouguiya	UM	MRO	2022-09-23 19:11:09.409447+08	f	f
140	MU	Mauritius	230	Mauritian rupee	â‚¨	MUR	2022-09-23 19:11:09.409447+08	f	f
141	YT	Mayotte	269				2022-09-23 19:11:09.409447+08	f	f
142	MX	Mexico	52	Mexican peso	$	MXN	2022-09-23 19:11:09.409447+08	f	f
143	FM	Micronesia	691	Micronesian dollar	$		2022-09-23 19:11:09.409447+08	f	f
144	MD	Moldova	373	Moldovan leu	L	MDL	2022-09-23 19:11:09.409447+08	f	f
145	MC	Monaco	377	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
146	MN	Mongolia	976	Mongolian tÃ¶grÃ¶g	â‚®	MNT	2022-09-23 19:11:09.409447+08	f	f
147	MS	Montserrat	1664	East Caribbean dolla	$	XCD	2022-09-23 19:11:09.409447+08	f	f
148	MA	Morocco	212	Moroccan dirham	Ø¯.Ù….	MAD	2022-09-23 19:11:09.409447+08	f	f
149	MZ	Mozambique	258	Mozambican metical	MT	MZN	2022-09-23 19:11:09.409447+08	f	f
150	MM	Myanmar	95	Burmese kyat	Ks	MMK	2022-09-23 19:11:09.409447+08	f	f
151	NA	Namibia	264	Namibian dollar	$	NAD	2022-09-23 19:11:09.409447+08	f	f
152	NR	Nauru	674	Australian dollar	$	AUD	2022-09-23 19:11:09.409447+08	f	f
153	NP	Nepal	977	Nepalese rupee	â‚¨	NPR	2022-09-23 19:11:09.409447+08	f	f
154	AN	Netherlands Antilles	599				2022-09-23 19:11:09.409447+08	f	f
155	NL	Netherlands The	31				2022-09-23 19:11:09.409447+08	f	f
156	NC	New Caledonia	687	CFP franc	Fr	XPF	2022-09-23 19:11:09.409447+08	f	f
157	NZ	New Zealand	64	New Zealand dollar	$	NZD	2022-09-23 19:11:09.409447+08	f	f
158	NI	Nicaragua	505	Nicaraguan cÃ³rdoba	C$	NIO	2022-09-23 19:11:09.409447+08	f	f
159	NE	Niger	227	West African CFA fra	Fr	XOF	2022-09-23 19:11:09.409447+08	f	f
160	NG	Nigeria	234	Nigerian naira	â‚¦	NGN	2022-09-23 19:11:09.409447+08	f	f
161	NU	Niue	683	New Zealand dollar	$	NZD	2022-09-23 19:11:09.409447+08	f	f
162	NF	Norfolk Island	672				2022-09-23 19:11:09.409447+08	f	f
163	MP	Northern Mariana Islands	1670				2022-09-23 19:11:09.409447+08	f	f
164	NO	Norway	47	Norwegian krone	kr	NOK	2022-09-23 19:11:09.409447+08	f	f
165	OM	Oman	968	Omani rial	Ø±.Ø¹.	OMR	2022-09-23 19:11:09.409447+08	f	f
166	PK	Pakistan	92	Pakistani rupee	â‚¨	PKR	2022-09-23 19:11:09.409447+08	f	f
167	PW	Palau	680	Palauan dollar	$		2022-09-23 19:11:09.409447+08	f	f
168	PS	Palestinian Territory Occupied	970				2022-09-23 19:11:09.409447+08	f	f
169	PA	Panama	507	Panamanian balboa	B/.	PAB	2022-09-23 19:11:09.409447+08	f	f
170	PG	Papua new Guinea	675	Papua New Guinean ki	K	PGK	2022-09-23 19:11:09.409447+08	f	f
171	PY	Paraguay	595	Paraguayan guaranÃ­	â‚²	PYG	2022-09-23 19:11:09.409447+08	f	f
172	PE	Peru	51	Peruvian nuevo sol	S/.	PEN	2022-09-23 19:11:09.409447+08	f	f
174	PN	Pitcairn Island	0				2022-09-23 19:11:09.409447+08	f	f
175	PL	Poland	48	Polish zÅ‚oty	zÅ‚	PLN	2022-09-23 19:11:09.409447+08	f	f
176	PT	Portugal	351	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
177	PR	Puerto Rico	1787				2022-09-23 19:11:09.409447+08	f	f
178	QA	Qatar	974	Qatari riyal	Ø±.Ù‚	QAR	2022-09-23 19:11:09.409447+08	f	f
179	RE	Reunion	262				2022-09-23 19:11:09.409447+08	f	f
180	RO	Romania	40	Romanian leu	lei	RON	2022-09-23 19:11:09.409447+08	f	f
181	RU	Russia	70	Russian ruble		RUB	2022-09-23 19:11:09.409447+08	f	f
182	RW	Rwanda	250	Rwandan franc	Fr	RWF	2022-09-23 19:11:09.409447+08	f	f
183	SH	Saint Helena	290	Saint Helena pound	Â£	SHP	2022-09-23 19:11:09.409447+08	f	f
184	KN	Saint Kitts And Nevis	1869	East Caribbean dolla	$	XCD	2022-09-23 19:11:09.409447+08	f	f
185	LC	Saint Lucia	1758	East Caribbean dolla	$	XCD	2022-09-23 19:11:09.409447+08	f	f
186	PM	Saint Pierre and Miquelon	508				2022-09-23 19:11:09.409447+08	f	f
187	VC	Saint Vincent And The Grenadines	1784	East Caribbean dolla	$	XCD	2022-09-23 19:11:09.409447+08	f	f
188	WS	Samoa	684	Samoan tÄlÄ	T	WST	2022-09-23 19:11:09.409447+08	f	f
189	SM	San Marino	378	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
190	ST	Sao Tome and Principe	239	SÃ£o TomÃ© and PrÃ­ncip	Db	STD	2022-09-23 19:11:09.409447+08	f	f
191	SA	Saudi Arabia	966	Saudi riyal	Ø±.Ø³	SAR	2022-09-23 19:11:09.409447+08	f	f
192	SN	Senegal	221	West African CFA fra	Fr	XOF	2022-09-23 19:11:09.409447+08	f	f
193	RS	Serbia	381	Serbian dinar	Ð´Ð¸Ð½. or din.	RSD	2022-09-23 19:11:09.409447+08	f	f
194	SC	Seychelles	248	Seychellois rupee	â‚¨	SCR	2022-09-23 19:11:09.409447+08	f	f
195	SL	Sierra Leone	232	Sierra Leonean leone	Le	SLL	2022-09-23 19:11:09.409447+08	f	f
196	SG	Singapore	65	Brunei dollar	$	BND	2022-09-23 19:11:09.409447+08	f	f
197	SK	Slovakia	421	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
198	SI	Slovenia	386	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
199	XG	Smaller Territories of the UK	44				2022-09-23 19:11:09.409447+08	f	f
200	SB	Solomon Islands	677	Solomon Islands doll	$	SBD	2022-09-23 19:11:09.409447+08	f	f
201	SO	Somalia	252	Somali shilling	Sh	SOS	2022-09-23 19:11:09.409447+08	f	f
202	ZA	South Africa	27	South African rand	R	ZAR	2022-09-23 19:11:09.409447+08	f	f
203	GS	South Georgia	0				2022-09-23 19:11:09.409447+08	f	f
204	SS	South Sudan	211	South Sudanese pound	Â£	SSP	2022-09-23 19:11:09.409447+08	f	f
205	ES	Spain	34	Euro	â‚¬	EUR	2022-09-23 19:11:09.409447+08	f	f
206	LK	Sri Lanka	94	Sri Lankan rupee	Rs or à¶»à·”	LKR	2022-09-23 19:11:09.409447+08	f	f
207	SD	Sudan	249	Sudanese pound	Ø¬.Ø³.	SDG	2022-09-23 19:11:09.409447+08	f	f
208	SR	Suriname	597	Surinamese dollar	$	SRD	2022-09-23 19:11:09.409447+08	f	f
209	SJ	Svalbard And Jan Mayen Islands	47				2022-09-23 19:11:09.409447+08	f	f
210	SZ	Swaziland	268	Swazi lilangeni	L	SZL	2022-09-23 19:11:09.409447+08	f	f
211	SE	Sweden	46	Swedish krona	kr	SEK	2022-09-23 19:11:09.409447+08	f	f
212	CH	Switzerland	41	Swiss franc	Fr	CHF	2022-09-23 19:11:09.409447+08	f	f
213	SY	Syria	963	Syrian pound	Â£ or Ù„.Ø³	SYP	2022-09-23 19:11:09.409447+08	f	f
214	TW	Taiwan	886	New Taiwan dollar	$	TWD	2022-09-23 19:11:09.409447+08	f	f
215	TJ	Tajikistan	992	Tajikistani somoni	Ð…Ðœ	TJS	2022-09-23 19:11:09.409447+08	f	f
216	TZ	Tanzania	255	Tanzanian shilling	Sh	TZS	2022-09-23 19:11:09.409447+08	f	f
217	TH	Thailand	66	Thai baht	à¸¿	THB	2022-09-23 19:11:09.409447+08	f	f
218	TG	Togo	228	West African CFA fra	Fr	XOF	2022-09-23 19:11:09.409447+08	f	f
219	TK	Tokelau	690				2022-09-23 19:11:09.409447+08	f	f
220	TO	Tonga	676	Tongan paÊ»anga	T$	TOP	2022-09-23 19:11:09.409447+08	f	f
221	TT	Trinidad And Tobago	1868	Trinidad and Tobago 	$	TTD	2022-09-23 19:11:09.409447+08	f	f
222	TN	Tunisia	216	Tunisian dinar	Ø¯.Øª	TND	2022-09-23 19:11:09.409447+08	f	f
223	TR	Turkey	90	Turkish lira		TRY	2022-09-23 19:11:09.409447+08	f	f
224	TM	Turkmenistan	7370	Turkmenistan manat	m	TMT	2022-09-23 19:11:09.409447+08	f	f
225	TC	Turks And Caicos Islands	1649	United States dollar	$	USD	2022-09-23 19:11:09.409447+08	f	f
226	TV	Tuvalu	688	Australian dollar	$	AUD	2022-09-23 19:11:09.409447+08	f	f
227	UG	Uganda	256	Ugandan shilling	Sh	UGX	2022-09-23 19:11:09.409447+08	f	f
228	UA	Ukraine	380	Ukrainian hryvnia	â‚´	UAH	2022-09-23 19:11:09.409447+08	f	f
229	AE	United Arab Emirates	971	United Arab Emirates	Ø¯.Ø¥	AED	2022-09-23 19:11:09.409447+08	f	f
230	GB	United Kingdom	44	British pound	Â£	GBP	2022-09-23 19:11:09.409447+08	f	f
231	US	United States	1	United States dollar	$	USD	2022-09-23 19:11:09.409447+08	f	f
232	UM	United States Minor Outlying Islands	1				2022-09-23 19:11:09.409447+08	f	f
233	UY	Uruguay	598	Uruguayan peso	$	UYU	2022-09-23 19:11:09.409447+08	f	f
234	UZ	Uzbekistan	998	Uzbekistani som		UZS	2022-09-23 19:11:09.409447+08	f	f
235	VU	Vanuatu	678	Vanuatu vatu	Vt	VUV	2022-09-23 19:11:09.409447+08	f	f
236	VA	Vatican City State (Holy See)	39				2022-09-23 19:11:09.409447+08	f	f
237	VE	Venezuela	58	Venezuelan bolÃ­var	Bs F	VEF	2022-09-23 19:11:09.409447+08	f	f
238	VN	Vietnam	84	Vietnamese Ä‘á»“ng	â‚«	VND	2022-09-23 19:11:09.409447+08	f	f
239	VG	Virgin Islands (British)	1284				2022-09-23 19:11:09.409447+08	f	f
240	VI	Virgin Islands (US)	1340				2022-09-23 19:11:09.409447+08	f	f
241	WF	Wallis And Futuna Islands	681				2022-09-23 19:11:09.409447+08	f	f
242	EH	Western Sahara	212				2022-09-23 19:11:09.409447+08	f	f
243	YE	Yemen	967	Yemeni rial	ï·¼	YER	2022-09-23 19:11:09.409447+08	f	f
244	YU	Yugoslavia	38				2022-09-23 19:11:09.409447+08	f	f
245	ZM	Zambia	260	Zambian kwacha	ZK	ZMW	2022-09-23 19:11:09.409447+08	f	f
246	ZW	Zimbabwe	263	Botswana pula	P	BWP	2022-09-23 19:11:09.409447+08	f	f
173	PH	Philippines	63	Philippine peso	₱	PHP	2022-09-23 19:11:09.409447+08	f	f
\.


--
-- Data for Name: documents; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.documents (pk, original_name, filename, path, mime_type, size, date_created, archived) FROM stdin;
2	image_picker8982759636802517416.jpg	1664796869118.039b0e36-0b59-497f-946f-20815cacee46.e80317c5-960c-4eab-b6cd-ff105d415cb0.2f61b9a1-c22a-4fe5-a0f8-1c91e8119c86.ab8294806d5b88e5.jpg	assets/images/1664796869118.039b0e36-0b59-497f-946f-20815cacee46.e80317c5-960c-4eab-b6cd-ff105d415cb0.2f61b9a1-c22a-4fe5-a0f8-1c91e8119c86.ab8294806d5b88e5.jpg	image/jpg	31385	2022-10-03 19:34:29.140002+08	f
3	image_picker8967636267315606933.jpg	1664796967633.17374e61-27dd-4c7c-880b-f73e3ecc602d.23c27e3d-7dae-4c9e-9d04-22a23cb929b0.b3c73529-8b83-4b8b-a368-f12bf605691d.2673d9b8ad84d2d1.jpg	assets/images/1664796967633.17374e61-27dd-4c7c-880b-f73e3ecc602d.23c27e3d-7dae-4c9e-9d04-22a23cb929b0.b3c73529-8b83-4b8b-a368-f12bf605691d.2673d9b8ad84d2d1.jpg	image/jpg	31385	2022-10-03 19:36:07.692112+08	f
4	image_picker8842657570411089830.jpg	1664797007187.b673cf25-e4b7-4b3d-bad4-ec372096b299.eaf9c369-36e4-4488-991a-aa1a6d77a06c.17ffeaf7-aa86-4822-b8da-fb1580ea2ad6.a39ebe8b31b82dab.jpg	assets/images/1664797007187.b673cf25-e4b7-4b3d-bad4-ec372096b299.eaf9c369-36e4-4488-991a-aa1a6d77a06c.17ffeaf7-aa86-4822-b8da-fb1580ea2ad6.a39ebe8b31b82dab.jpg	image/jpg	31385	2022-10-03 19:36:47.189713+08	f
5	image_picker6768528922645196744.jpg	1664797247770.a224afe4-43bd-4632-9a20-1079ae8f13fb.8b443390-0b1e-4352-8bc5-cafbbd0f155d.7ee96b59-108b-4de7-a618-5ae5dff96652.ceeffcedb343936b.jpg	assets/images/1664797247770.a224afe4-43bd-4632-9a20-1079ae8f13fb.8b443390-0b1e-4352-8bc5-cafbbd0f155d.7ee96b59-108b-4de7-a618-5ae5dff96652.ceeffcedb343936b.jpg	image/jpg	31385	2022-10-03 19:40:47.851564+08	f
6	image_picker91497154107805634.jpg	1664797410943.98f8e428-f4c0-434f-94d3-8ac345980e69.09dc2aa9-aa8e-4c34-93ac-5297498a6bf3.b086d8ae-7812-4e80-a3fd-f5e240048593.7be4796d5bd57f610.jpg	assets/images/1664797410943.98f8e428-f4c0-434f-94d3-8ac345980e69.09dc2aa9-aa8e-4c34-93ac-5297498a6bf3.b086d8ae-7812-4e80-a3fd-f5e240048593.7be4796d5bd57f610.jpg	image/jpg	31385	2022-10-03 19:43:30.94562+08	f
7	image_picker3573293372406766279.jpg	1664797429441.70be43e6-3556-4803-907d-4e85a3f5487d.654a0782-440c-44cb-b3c4-898bed1cbfe8.3b38c639-8153-4e22-ae46-5b99fd2dc4d9.d10ae1f20c10afd435.jpg	assets/images/1664797429441.70be43e6-3556-4803-907d-4e85a3f5487d.654a0782-440c-44cb-b3c4-898bed1cbfe8.3b38c639-8153-4e22-ae46-5b99fd2dc4d9.d10ae1f20c10afd435.jpg	image/jpg	145361	2022-10-03 19:43:49.515339+08	f
8	image_picker5865853390207627424.jpg	1664797454440.48c505f9-f8fc-4d56-898e-7b87b7748b03.ee9efe03-b4e0-4395-8924-f5abe0618eb0.856180eb-aadd-46dc-94c2-c72fef6fd400.df211b92234f610fc.jpg	assets/images/1664797454440.48c505f9-f8fc-4d56-898e-7b87b7748b03.ee9efe03-b4e0-4395-8924-f5abe0618eb0.856180eb-aadd-46dc-94c2-c72fef6fd400.df211b92234f610fc.jpg	image/jpg	31385	2022-10-03 19:44:14.456335+08	f
9	image_picker4470309760283298987.jpg	1664797496671.45ac69e5-78dd-4e72-bf9a-14ec6b91323b.3f2f6073-2ce2-473b-972f-e71eba798e50.bab39def-607e-4103-a64c-9ee2182faade.71ec9fe4410911967.jpg	assets/images/1664797496671.45ac69e5-78dd-4e72-bf9a-14ec6b91323b.3f2f6073-2ce2-473b-972f-e71eba798e50.bab39def-607e-4103-a64c-9ee2182faade.71ec9fe4410911967.jpg	image/jpg	31385	2022-10-03 19:44:56.675737+08	f
10	229990cd-18be-4d27-ad96-b652b226c9bc4622348900063397081.jpg	1664797501344.56879480-7eef-4cc5-99bc-4010954725c8.15dafc07-43b2-4f56-aec5-dfe63a4883de.c0289391-47b0-4d1d-9a48-3cb8073ad3db.4f1023b3681ea4523.jpg	assets/images/1664797501344.56879480-7eef-4cc5-99bc-4010954725c8.15dafc07-43b2-4f56-aec5-dfe63a4883de.c0289391-47b0-4d1d-9a48-3cb8073ad3db.4f1023b3681ea4523.jpg	image/jpg	64889	2022-10-03 19:45:01.349318+08	f
11	image_picker6840925267254822835.jpg	1664797640055.b2371f8c-c0c9-4941-b672-1bab072c9910.423e6189-1214-4517-ab14-de63c84e5519.6f19b649-2241-4ac3-bdbd-8f8322e7b2fb.cbe1d69873b37942.jpg	assets/images/1664797640055.b2371f8c-c0c9-4941-b672-1bab072c9910.423e6189-1214-4517-ab14-de63c84e5519.6f19b649-2241-4ac3-bdbd-8f8322e7b2fb.cbe1d69873b37942.jpg	image/jpg	31385	2022-10-03 19:47:20.060981+08	f
12	image_picker4960342397753600784.jpg	1664797982981.98cc791d-ad5b-49ff-be31-ab5ff2affaae.34d2eabf-840e-49ad-8efb-1757f2cf1389.2f7d6d0f-d7dd-44b5-bad5-4ce93da2cc53.3fd8dc10710ef6104d5.jpg	assets/images/1664797982981.98cc791d-ad5b-49ff-be31-ab5ff2affaae.34d2eabf-840e-49ad-8efb-1757f2cf1389.2f7d6d0f-d7dd-44b5-bad5-4ce93da2cc53.3fd8dc10710ef6104d5.jpg	image/jpg	31385	2022-10-03 19:53:02.988266+08	f
13	7f2e561d-e256-41c8-a2eb-5f873b68cf938431658135068853734.jpg	1664797991503.343f839b-f4d7-4099-b0ed-d138e1b57e65.c42fa4f8-fd18-4134-8c12-06d087c52ebe.6f4c1f20-6763-4868-affd-9405bf3f27b0.fb8910b4278751a97.jpg	assets/images/1664797991503.343f839b-f4d7-4099-b0ed-d138e1b57e65.c42fa4f8-fd18-4134-8c12-06d087c52ebe.6f4c1f20-6763-4868-affd-9405bf3f27b0.fb8910b4278751a97.jpg	image/jpg	63414	2022-10-03 19:53:11.517889+08	f
14	image_picker4969106784542889397.jpg	1664798801667.b7261fe1-1922-47e4-b62b-3f1da57d6a42.67d9c078-ffd9-4370-b7d7-5cd59337cfbe.a26de879-2847-428f-b9df-2cd125849554.dbc3e9528e17a787.jpg	assets/images/1664798801667.b7261fe1-1922-47e4-b62b-3f1da57d6a42.67d9c078-ffd9-4370-b7d7-5cd59337cfbe.a26de879-2847-428f-b9df-2cd125849554.dbc3e9528e17a787.jpg	image/jpg	31385	2022-10-03 20:06:41.723845+08	f
15	1eb8e898-6558-4dad-baff-a8be71959b09628447630630276450.jpg	1664798807890.6a3c1085-d56b-4cc3-a3c4-20cabe5d94d5.63258a86-636e-46bd-a4e3-6f9d24b8dcc9.c40c07c7-16c4-4f09-be09-c3c1852283e7.4db333bf7760abd7.jpg	assets/images/1664798807890.6a3c1085-d56b-4cc3-a3c4-20cabe5d94d5.63258a86-636e-46bd-a4e3-6f9d24b8dcc9.c40c07c7-16c4-4f09-be09-c3c1852283e7.4db333bf7760abd7.jpg	image/jpg	64254	2022-10-03 20:06:47.897117+08	f
16	image_picker578472292172167327.jpg	1664916096980.cd27b3cf-d81c-43a9-892a-28c18c829e55.a636cac0-d647-4274-bbab-34b50f711a93.4f095d52-3fa2-4502-88d1-8a83f42f7bf0.6509be2ea6a2a67b.jpg	assets/images/1664916096980.cd27b3cf-d81c-43a9-892a-28c18c829e55.a636cac0-d647-4274-bbab-34b50f711a93.4f095d52-3fa2-4502-88d1-8a83f42f7bf0.6509be2ea6a2a67b.jpg	image/jpg	31385	2022-10-05 04:41:36.988829+08	f
17	795cfbdc-caa1-4e24-93bf-450a11cbd0e56383730633013824673.jpg	1664916103662.ba52a2c3-60cd-44f0-9c20-9b0cabb11df5.6b42a50c-0a31-4795-b6e7-af1ccc51eb6b.7aab02c6-4a22-489d-b36c-e3ea7fec7b1f.815f224c786d56d3.jpg	assets/images/1664916103662.ba52a2c3-60cd-44f0-9c20-9b0cabb11df5.6b42a50c-0a31-4795-b6e7-af1ccc51eb6b.7aab02c6-4a22-489d-b36c-e3ea7fec7b1f.815f224c786d56d3.jpg	image/jpg	63629	2022-10-05 04:41:43.664349+08	f
18	image_picker4306706525290694319.jpg	1664916669623.74d0dd2e-a882-4904-af56-67f20a5a052b.c0d89843-245c-4358-8953-fe0bd06a6f69.e7385d70-3164-46bc-b965-574992936db1.49617034a2271216.jpg	assets/images/1664916669623.74d0dd2e-a882-4904-af56-67f20a5a052b.c0d89843-245c-4358-8953-fe0bd06a6f69.e7385d70-3164-46bc-b965-574992936db1.49617034a2271216.jpg	image/jpg	31385	2022-10-05 04:51:09.629993+08	f
1	chris.jpg	chris.jpg	assets/images/uploads/profile/chris.jpg	image/jpg	1153433.6	2022-09-24 09:45:47.896385+08	f
19	20e976ff-26b5-4292-9fe3-500f107441834585547252564525047.jpg	1664916673933.985a3875-d025-48e5-9508-c50d59e93c04.65e80dd7-b2f2-48cc-bf96-b5cf442bf470.87f97995-c251-4b89-9fbd-695522361ecd.01917218253e1178.jpg	assets/images/1664916673933.985a3875-d025-48e5-9508-c50d59e93c04.65e80dd7-b2f2-48cc-bf96-b5cf442bf470.87f97995-c251-4b89-9fbd-695522361ecd.01917218253e1178.jpg	image/jpg	64166	2022-10-05 04:51:13.936075+08	f
20	image_picker5166244096482896984.jpg	1664916889295.78b66364-dfdb-4414-835b-260e42f3bbff.2622f121-486a-46ed-a850-1a30da602df2.7df6043a-2e3d-469c-9afd-f3f59db793bc.7f6dcf01c41e4923.jpg	assets/images/1664916889295.78b66364-dfdb-4414-835b-260e42f3bbff.2622f121-486a-46ed-a850-1a30da602df2.7df6043a-2e3d-469c-9afd-f3f59db793bc.7f6dcf01c41e4923.jpg	image/jpg	145361	2022-10-05 04:54:49.337953+08	f
21	a6fd5bad-2c51-4787-a65f-5fcac68091786113503417163353516.jpg	1664916894593.c5c9e0d7-0a0d-431f-9adc-d50bd3cc1425.48d70421-942b-4d73-a319-72d2b91b2c4e.362e1ec0-bb80-4720-81bb-0beecb9a4a33.df42da1dd10ef8b39.jpg	assets/images/1664916894593.c5c9e0d7-0a0d-431f-9adc-d50bd3cc1425.48d70421-942b-4d73-a319-72d2b91b2c4e.362e1ec0-bb80-4720-81bb-0beecb9a4a33.df42da1dd10ef8b39.jpg	image/jpg	63414	2022-10-05 04:54:54.65181+08	f
22	image_picker4414279767664012814.jpg	1664916957504.6b203f95-bc6d-4daa-ae04-ad5e5617442b.a2fbaa31-ce8c-48b4-b188-a0b97197255b.b5c9f2ea-6588-497b-b529-1ebc9fe21717.c592a141c27efc57.jpg	assets/images/1664916957504.6b203f95-bc6d-4daa-ae04-ad5e5617442b.a2fbaa31-ce8c-48b4-b188-a0b97197255b.b5c9f2ea-6588-497b-b529-1ebc9fe21717.c592a141c27efc57.jpg	image/jpg	145361	2022-10-05 04:55:57.731414+08	f
23	161fbb0c-746e-428e-aa0c-7cc16466d9656653953435792235650.jpg	1664916964091.cc769f64-0718-4262-b5a0-230245ed529e.1cafa757-6a8b-46f4-a5ca-0c9067e7c8fe.c71b5a88-d8fe-4d87-b85f-2802feca0120.15226e31051cd8fd8.jpg	assets/images/1664916964091.cc769f64-0718-4262-b5a0-230245ed529e.1cafa757-6a8b-46f4-a5ca-0c9067e7c8fe.c71b5a88-d8fe-4d87-b85f-2802feca0120.15226e31051cd8fd8.jpg	image/jpg	64254	2022-10-05 04:56:04.117895+08	f
28	big_3.png	big_3.png	assets/images/big_3.png	image/png	123456	2022-10-05 05:51:57.860931+08	f
30	farmer.png	farmer.png	assets/images/farmer.png	image/png	1234	2022-10-05 06:15:22.42554+08	f
32	big_1_.png	big_1_.png	assets/images/big_2.png	image/png	123456	2022-10-05 05:51:10.52282+08	f
33	RY6EHiXl.jpg	RY6EHiXl.jpg	assets/images/RY6EHiXl.jpg	image/jpg	1234	2022-10-08 15:30:06.737596+08	f
36	XeWg4Ny.jpg	XeWg4Ny.jpg	assets/images/XeWg4Ny.jpg	image/jpg	1234	2022-10-08 15:30:40.582553+08	f
37	9VtNpc9.jpg	9VtNpc9.jpg	assets/images/9VtNpc9.jpg	image/jpg	1234	2022-10-08 15:30:40.589166+08	f
38	1646470633439.419f6e81-60df-4cbd-aa92-7effa1c78fc4.bd439e59-7056-4cdc-9159-e9603a609ab5.3c8297ba-273c-4a00-8244-20a45e2f3e3f.1f7910f721867fb7b.png	1646470633439.419f6e81-60df-4cbd-aa92-7effa1c78fc4.bd439e59-7056-4cdc-9159-e9603a609ab5.3c8297ba-273c-4a00-8244-20a45e2f3e3f.1f7910f721867fb7b.png	assets/images/uploads/profile/1646470633439.419f6e81-60df-4cbd-aa92-7effa1c78fc4.bd439e59-7056-4cdc-9159-e9603a609ab5.3c8297ba-273c-4a00-8244-20a45e2f3e3f.1f7910f721867fb7b.png	image/png	1153466	2022-10-09 08:04:58.752882+08	f
24	morgan.jpg	morgan.jpg	assets/images/uploads/profile/morgan.jpg	image/jpg	31385	2022-10-05 05:08:25.074253+08	f
49	gal.jpeg	gal.jpeg	assets/images/uploads/profile/gal.jpeg	image/jpg	31385	2022-10-05 05:08:25.074253+08	f
26	top10.jpg	top10.jpg	assets/images/top10.jpg	image/jpg	123456	2022-10-05 05:51:10.52282+08	f
27	vegetables1.jpg	vegetables1.jpg	assets/images/vegetables1.jpg	image/jpg	123456	2022-10-05 05:51:57.860931+08	f
29	vegetables2.jpg	vegetables2.jpg	assets/images/vegetables2.jpg	image/jpg	123456	2022-10-05 05:51:57.860931+08	f
39	talong.jpg	talong.jpg	assets/images/uploads/documents/talong.jpg	image/jpg	1153466	2022-10-09 08:04:58.752882+08	f
40	pechay.jpg	pechay.jpg	assets/images/uploads/documents/pechay.jpg	image/jpg	1153466	2022-10-09 08:04:58.752882+08	f
41	peppers.jpg	peppers.jpg	assets/images/uploads/documents/peppers.jpg	image/jpg	1153466	2022-10-09 08:04:58.752882+08	f
42	sayote.jpg	sayote.jpg	assets/images/uploads/documents/sayote.jpg	image/jpg	1153466	2022-10-09 08:04:58.752882+08	f
44	upo.jpg	upo.jpg	assets/images/uploads/documents/upo.jpg	image/jpg	1153466	2022-10-09 08:04:58.752882+08	f
45	sigarilyas.jpg	sigarilyas.jpg	assets/images/uploads/documents/sigarilyas.jpg	image/jpg	1153466	2022-10-09 08:04:58.752882+08	f
46	chilis.jpeg	chilis.jpeg	assets/images/uploads/documents/chilis.jpeg	image/jpg	1153466	2022-10-09 08:04:58.752882+08	f
47	grapes.jpg	grapes.jpg	assets/images/uploads/documents/grapes.jpg	image/jpg	1153466	2022-10-09 08:04:58.752882+08	f
48	mangoes.jpg	mangoes.jpg	assets/images/uploads/documents/mangoes.jpg	image/jpg	1153466	2022-10-09 08:04:58.752882+08	f
25	fruits.jpeg	fruits.jpeg	assets/images/fruits.jpeg	image/jpg	62788	2022-10-05 05:08:32.450347+08	f
\.


--
-- Data for Name: emails; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.emails (pk, uuid, "from", from_name, "to", to_name, cc, bcc, subject, body, date_created, sent, archived, user_pk) FROM stdin;
3	81ad9382-ec13-4fd7-aec3-334e0f7bcbf4	calm.dream2017@gmail.com	Samdhana Admin	rpascual0802@gmail.com.au	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-10-05 04:44:17.107276+08	true	f	14
4	26b50598-160c-4c0b-89b0-5164aa69938b	calm.dream2017@gmail.com	Samdhana Admin	rpascual0803@gmail.com.au	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-10-05 04:51:25.523334+08	true	f	17
5	d9d9c5c5-4535-431f-99ec-0bf80d436ff8	calm.dream2017@gmail.com	Samdhana Admin	rpascual0804@gmail.com.au	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-10-05 04:56:16.406206+08	true	f	18
6	d72f6d8a-ed85-4ee9-ac0d-df40dac38213	calm.dream2017@gmail.com	Samdhana Admin	email01@gmail.com	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-10-05 05:10:45.232267+08	true	f	19
\.


--
-- Data for Name: genders; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.genders (pk, name, archived) FROM stdin;
6	Male	f
7	Female	f
8	Prefer not to say	f
\.


--
-- Data for Name: inquiries; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.inquiries (pk, uuid, name, email, subject, message, date_created, archived) FROM stdin;
\.


--
-- Data for Name: logs; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.logs (pk, model, model_pk, details, user_pk, date_created, archived) FROM stdin;
1	products	1	"{\\"user_pk\\":4,\\"uuid\\":\\"151ea420-3504-4205-90c4-db15b3ed0f40\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"e\\",\\"quantity\\":\\"2\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"0\\",\\"price_to\\":\\"8000\\",\\"currency\\":\\"php\\"}"	4	2022-09-22 19:10:12.571565+08	f
2	products	2	"{\\"user_pk\\":4,\\"uuid\\":\\"d2920281-4b4b-41d5-9344-5bcf2db051d6\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"b\\",\\"quantity\\":\\"5\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"3000\\",\\"price_to\\":\\"8000\\",\\"currency\\":\\"php\\"}"	4	2022-09-22 20:20:42.202238+08	f
3	products	4	"{\\"user_pk\\":4,\\"uuid\\":\\"12ef775b-a245-4ba2-8b4b-45c43a10962b\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"c\\",\\"quantity\\":\\"5\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"0\\",\\"price_to\\":\\"6000\\",\\"currency\\":\\"php\\"}"	4	2022-09-22 20:23:35.812796+08	f
4	products	5	"{\\"user_pk\\":4,\\"uuid\\":\\"78609ea7-68eb-45e8-a938-3f96374136b4\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Mango\\",\\"quantity\\":\\"100\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"0\\",\\"price_to\\":\\"2500\\",\\"currency\\":\\"php\\"}"	4	2022-09-25 11:01:18.111197+08	f
5	products	6	"{\\"user_pk\\":4,\\"uuid\\":\\"e0a12dba-449f-4710-93ef-50bda50698b9\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Grapes\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"0\\",\\"price_to\\":\\"8000\\",\\"currency\\":\\"php\\"}"	4	2022-09-25 11:05:18.67624+08	f
6	products	7	"{\\"user_pk\\":4,\\"uuid\\":\\"7094d196-c751-418e-bc9c-abb6addf6cd0\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Dragon Fruit\\",\\"quantity\\":\\"500\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"0\\",\\"price_to\\":\\"8500\\",\\"currency\\":\\"php\\"}"	4	2022-09-25 11:07:46.24174+08	f
7	products	8	"{\\"user_pk\\":4,\\"uuid\\":\\"42b2efbf-11f6-4e75-bb91-88d8c0f308a2\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Dragon Fruit\\",\\"quantity\\":\\"500\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"0\\",\\"price_to\\":\\"8500\\",\\"currency\\":\\"php\\"}"	4	2022-09-25 11:08:20.003949+08	f
8	products	9	"{\\"user_pk\\":4,\\"uuid\\":\\"28b657f6-82fe-4a64-8c28-a5d7b88f01dd\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"test 1\\",\\"quantity\\":\\"1\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"2653\\",\\"price_to\\":\\"6860\\",\\"currency\\":\\"php\\"}"	4	2022-09-25 13:42:01.719288+08	f
9	products	10	"{\\"user_pk\\":4,\\"uuid\\":\\"deb1eb1b-9a04-40e0-8a0f-c6b7eae98033\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"hahahab\\",\\"quantity\\":\\"25\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	4	2022-09-26 06:05:25.656331+08	f
10	users	6	"{\\"user_pk\\":\\"4\\",\\"created_by\\":19}"	19	2022-10-23 07:05:29.323311+08	f
11	users	8	"{\\"user_pk\\":\\"4\\",\\"created_by\\":19}"	19	2022-10-23 07:10:09.110279+08	f
12	users	9	"{\\"user_pk\\":\\"4\\",\\"created_by\\":19}"	19	2022-10-23 07:10:53.26099+08	f
13	users	11	"{\\"user_pk\\":\\"4\\",\\"created_by\\":19}"	19	2022-10-23 11:42:44.773577+08	f
14	users	12	"{\\"user_pk\\":\\"4\\",\\"created_by\\":19}"	19	2022-10-23 15:58:34.378717+08	f
15	users	14	"{\\"user_pk\\":\\"4\\",\\"created_by\\":19}"	19	2022-10-23 16:58:55.403772+08	f
16	orders	2	"{\\"uuid\\":\\"0fc40ceb-1e8a-49d8-a20c-812bbf7f4119\\",\\"user_pk\\":19,\\"product_pk\\":\\"10\\",\\"quantity\\":\\"200.00\\",\\"measurement_pk\\":\\"2\\",\\"price\\":\\"1.50\\",\\"status\\":\\"Added to Cart\\"}"	19	2022-10-25 13:05:21.830443+08	f
\.


--
-- Data for Name: measurements; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.measurements (pk, symbol, name, date_created, archived) FROM stdin;
1	g	Gram	2022-09-19 19:12:07.982069+08	f
2	kg	Kilogram	2022-09-19 19:12:07.982069+08	f
3	lb	Pound	2022-09-19 19:12:07.982069+08	f
4	pc	Piece	2022-09-19 19:12:07.982069+08	f
\.


--
-- Data for Name: migrations; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.migrations (id, "timestamp", name) FROM stdin;
114	1643278885997	InsertGendersMainAdmin1643278885997
115	1643278885997	InsertAccountsMainAdmin1643278885997
116	1643512893273	InsertUsersMainAdmin1643512893273
117	1663495075545	InsertMeasurementsMainAdmin1663495075545
118	1663931160470	InsertCountriesMainAdmin1663931160470
120	1664742674514	InsertUserRoles1664742674514
121	1664799656030	InsertTestAddress1664799656030
122	1666650256696	InsertStatuses1666650256696
\.


--
-- Data for Name: notifications; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.notifications (pk, title, details, user_pk, date_created, archived) FROM stdin;
\.


--
-- Data for Name: orders; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.orders (pk, uuid, user_pk, product_pk, quantity, measurement_pk, price, date_created, status_pk, archived, seller_pk) FROM stdin;
2	0fc40ceb-1e8a-49d8-a20c-812bbf7f4119	4	7	600.00	2	4.50	2022-10-25 13:05:21.830443+08	1	f	19
3	0fc40ceb-1e8a-49d8-a20c-812bbasdfasdf119	19	10	100.00	2	4.50	2022-10-25 13:05:21.830443+08	1	f	4
\.


--
-- Data for Name: permissions; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.permissions (pk, parent, "group", name, details, user_pk, date_created, archived) FROM stdin;
\.


--
-- Data for Name: product_documents; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.product_documents (pk, user_pk, type, document_pk, date_created, product_pk, "default") FROM stdin;
2	19	slide	27	2022-10-10 21:11:44.793251+08	10	f
3	19	slide	28	2022-10-10 21:11:44.796061+08	10	f
4	19	slide	29	2022-10-10 21:11:44.798706+08	10	f
7	4	slide	39	2022-10-10 21:11:44.786618+08	7	t
8	4	slide	40	2022-10-10 21:11:44.786618+08	10	t
9	4	slide	41	2022-10-10 21:11:44.786618+08	2	t
10	4	slide	42	2022-10-10 21:11:44.786618+08	1	t
11	4	slide	44	2022-10-10 21:11:44.786618+08	4	t
1	19	slide	26	2022-10-10 21:11:44.786618+08	10	f
12	4	slide	45	2022-10-10 21:11:44.786618+08	9	t
14	4	slide	46	2022-10-10 21:11:44.786618+08	8	t
15	4	slide	48	2022-10-10 21:11:44.786618+08	5	t
16	4	slide	47	2022-10-10 21:11:44.786618+08	6	t
\.


--
-- Data for Name: product_ratings; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.product_ratings (pk, user_pk, product_pk, rating, date_created, message, anonymous) FROM stdin;
2	4	10	5.00	2022-10-12 04:56:27.942699+08	\N	f
1	19	10	3.00	2022-10-12 04:19:59.331822+08	aaaaa	t
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.products (pk, uuid, user_pk, type, name, date_created, archived, measurement_pk, country_pk, description, quantity, price_from, price_to, category_pk) FROM stdin;
8	42b2efbf-11f6-4e75-bb91-88d8c0f308a2	4	future_crops	Chili	2022-09-25 11:08:20.003949+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	100.00	45.00	0.00	1
10	deb1eb1b-9a04-40e0-8a0f-c6b7eae98033	4	looking_for	Pechay	2022-09-26 06:05:25.656331+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	200.00	1.50	0.00	4
7	7094d196-c751-418e-bc9c-abb6addf6cd0	19	looking_for	Talong	2022-09-25 11:07:46.24174+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	100.60	30.00	0.00	1
9	28b657f6-82fe-4a64-8c28-a5d7b88f01dd	4	looking_for	Sigarilyas	2022-09-25 13:42:01.719288+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	58.00	41.00	0.00	2
2	d2920281-4b4b-41d5-9344-5bcf2db051d6	4	looking_for	Bell Pepper	2022-09-22 20:20:42.202238+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	2.50	25.00	0.00	2
4	12ef775b-a245-4ba2-8b4b-45c43a10962b	4	looking_for	Upo	2022-09-22 20:23:35.812796+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	3.50	20.00	100.00	1
1	151ea420-3504-4205-90c4-db15b3ed0f40	4	looking_for	Sayote	2022-09-22 19:10:12.571565+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	78.00	40.00	0.00	3
5	78609ea7-68eb-45e8-a938-3f96374136b4	4	looking_for	Mango	2022-09-25 11:01:18.111197+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	10.00	35.00	75.00	4
6	e0a12dba-449f-4710-93ef-50bda50698b9	4	looking_for	Grapes	2022-09-25 11:05:18.67624+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	10.00	3.50	1000.00	3
\.


--
-- Data for Name: provinces; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.provinces (pk, name, country_pk, active, user_pk, archived) FROM stdin;
3	Rizal	173	t	4	f
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.roles (pk, name, details, date_created, archived) FROM stdin;
1	admin	Administrator	2022-10-03 04:43:43.2389+08	f
\.


--
-- Data for Name: seller_addresses; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.seller_addresses (pk, type, "default", province_pk, city_pk, area_pk, address, seller_pk, date_created) FROM stdin;
1	home	t	3	2	1	Palatiw	1	2022-10-19 05:29:12.538151+08
2	home	t	3	2	1	Palatiw	2	2022-10-19 05:29:12.538151+08
\.


--
-- Data for Name: sellers; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.sellers (pk, uuid, user_pk, date_created, archived, mobile_number, about) FROM stdin;
1	0fae2433-ba7b-46d8-a7cb-2216a4497f9e	4	2022-10-19 05:17:13.778888+08	f	639162052424	\N
2	0fae2433-ba7b-46d8-a7cb-2216a1111f9e	19	2022-10-19 05:17:13.778888+08	f	639162052424	\N
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.sessions (pk, token, expiration, date_created, account_pk) FROM stdin;
144	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1haWxAZ21haWwuY29tIiwic3ViIjoxMTMsImlhdCI6MTY2NjU2MDk4NiwiZXhwIjoxNjY2NjA0MTg2fQ.W976m4hhomIkFX3xKzX6ZtRcU_07csI-t5VC1wUxLBg	2022-10-24 17:36:26+08	2022-10-24 05:36:26.819225+08	113
157	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1haWwwMUBnbWFpbC5jb20iLCJzdWIiOjEzNSwiaWF0IjoxNjY2NzgyNTc0LCJleHAiOjE2NjY4MjU3NzR9.uTba0DlcSSGLqeRmzhsMZ63QSZOufk8S3a_OcftH6KE	2022-10-27 07:09:34+08	2022-10-26 19:09:34.839462+08	135
\.


--
-- Data for Name: slider_documents; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.slider_documents (pk, user_pk, slider_pk, type, document_pk, date_created) FROM stdin;
2	4	2	icon	30	2022-10-05 06:15:46.314376+08
5	4	4	background	28	2022-10-06 06:04:25.177759+08
6	4	5	background	29	2022-10-06 06:04:25.177759+08
3	4	3	background	27	2022-10-06 06:04:25.177759+08
1	4	2	background	25	2022-10-05 06:13:43.287141+08
\.


--
-- Data for Name: sliders; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.sliders (pk, type, title, details, user_pk, archived) FROM stdin;
2	home	Welcome	Samdhana Community Market sit amet, consectuta adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris	4	f
4	home	Three	Samdhana Community Market sit amet, consectuta adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris	4	f
5	home	Four	Samdhana Community Market sit amet, consectuta adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris	4	f
3	home	Two	Samdhana Community Market sit amet, consectuta adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris	4	f
\.


--
-- Data for Name: statuses; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.statuses (pk, type, name, date_created, archived, user_pk) FROM stdin;
1	orders	Added to Cart	2022-10-25 06:28:39.31071+08	f	4
2	orders	Ordered	2022-10-25 06:28:39.31071+08	f	4
3	orders	Cancelled	2022-10-25 06:28:39.31071+08	f	4
4	orders	Delivered	2022-10-25 06:28:39.31071+08	f	4
5	orders	Order Received	2022-10-25 06:28:39.31071+08	f	4
\.


--
-- Data for Name: ticket_messages; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.ticket_messages (pk, user_pk, message, ticket_pk, date_created, archived) FROM stdin;
\.


--
-- Data for Name: tickets; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.tickets (pk, uuid, user_pk, category, subject, status, date_created, archived) FROM stdin;
\.


--
-- Data for Name: typeorm_metadata; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.typeorm_metadata (type, database, schema, "table", name, value) FROM stdin;
\.


--
-- Data for Name: user_addresses; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.user_addresses (pk, type, province_pk, city_pk, area_pk, address, user_pk, date_created, "default") FROM stdin;
1	home	3	2	1	Palatiw	11	2022-10-03 20:54:54.643943+08	t
4	home	3	2	1	Pinagbuhatan	14	2022-10-05 04:44:17.107276+08	t
7	home	3	2	1	Kapasigan	17	2022-10-05 04:51:25.523334+08	t
8	home	3	2	1	Buting	18	2022-10-05 04:56:16.406206+08	t
9	home	3	2	1	Orambo	19	2022-10-05 05:10:45.232267+08	t
10	home	3	2	1	San Nicholas	4	2022-10-05 05:10:45.232267+08	t
\.


--
-- Data for Name: user_cart; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.user_cart (pk, user_pk, product_pk, date_created, product) FROM stdin;
\.


--
-- Data for Name: user_documents; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.user_documents (pk, user_pk, type, document_pk, date_created) FROM stdin;
1	4	profile_photo	1	2022-10-02 11:12:16.743093+08
2	11	profile_photo	14	2022-10-03 20:54:54.643943+08
3	11	id_photo	15	2022-10-03 20:54:54.643943+08
8	14	profile_photo	16	2022-10-05 04:44:17.107276+08
9	14	id_photo	17	2022-10-05 04:44:17.107276+08
12	17	profile_photo	18	2022-10-05 04:51:25.523334+08
13	17	id_photo	19	2022-10-05 04:51:25.523334+08
14	18	profile_photo	22	2022-10-05 04:56:16.406206+08
15	18	id_photo	23	2022-10-05 04:56:16.406206+08
16	19	profile_photo	24	2022-10-05 05:10:45.232267+08
17	19	id_photo	38	2022-10-05 05:10:45.232267+08
18	9	profile_photo	49	2022-10-05 05:10:45.232267+08
\.


--
-- Data for Name: user_follow; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.user_follow (pk, user_pk, created_by, date_created) FROM stdin;
1	9	4	2022-10-22 06:30:31.478723+08
2	11	4	2022-10-22 06:30:31.485024+08
3	14	4	2022-10-22 06:30:31.487225+08
4	4	9	2022-10-22 06:30:31.487225+08
13	9	19	2022-10-23 15:58:34.378717+08
14	4	19	2022-10-23 16:58:55.403772+08
15	19	19	2022-10-22 06:30:31.487225+08
\.


--
-- Data for Name: user_permissions; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.user_permissions (pk, permission_pk, user_pk) FROM stdin;
\.


--
-- Data for Name: user_ratings; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.user_ratings (pk, rating, user_pk, created_by, date_created, message) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.users (pk, uuid, last_name, first_name, middle_name, gender_pk, birthdate, mobile_number, account_pk, archived, email_address, country_pk, date_created, role_pk, about, is_seller) FROM stdin;
9	b2c1dee9-d35b-4542-8414-2e1ca0802102	Nixon	Briley	\N	\N	2022-09-30	9162052424	124	f	rpascual0817@gmail.com.au	173	2022-09-30 07:13:41.073247+08	1	\N	f
11	ef972bc6-d51b-4ef9-8a23-0bdc42fb9fb5	Mcfarland	Molly	\N	\N	2022-10-03	9162052425	127	f	rpascual0810@gmail.com.au	173	2022-10-03 20:54:54.643943+08	1	\N	f
14	4b0cb2fb-1035-4fab-9711-d0cfbaa47603	Shields	Jamal	\N	\N	2022-10-05	9162052424	130	f	rpascual0802@gmail.com.au	173	2022-10-05 04:44:17.107276+08	1	\N	f
17	e70f0db2-b444-476d-b063-acc0e67ed2c6	Rosario	Hugo	\N	\N	2022-10-05	9162052424	133	f	rpascual0803@gmail.com.au	173	2022-10-05 04:51:25.523334+08	1	\N	f
18	4f926912-d0fb-4a94-8a52-834e7749abf3	Brenden	Frazier	\N	\N	2022-10-06	9162052424	134	f	rpascual0804@gmail.com.au	173	2022-10-05 04:56:16.406206+08	1	\N	f
19	cea461ac-82c8-492d-840b-079284a3fa5c	Leach	Derick	\N	\N	2022-10-07	9172052424	135	f	email01@gmail.com	173	2022-10-05 05:10:45.232267+08	1	\N	f
4	1e2e27ca-06ba-4a9f-951b-a130567eafd01	Valenzuela	Dana		6	1986-08-12	09162052424	113	f	email@gmail.com	173	2022-09-24 07:28:42.607938+08	1	\N	f
\.


--
-- Data for Name: validations; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.validations (pk, type, value, status, date_created, archived) FROM stdin;
\.


--
-- Name: accounts_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.accounts_pk_seq', 135, true);


--
-- Name: areas_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.areas_pk_seq', 1, true);


--
-- Name: article_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.article_documents_pk_seq', 3, true);


--
-- Name: articles_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.articles_pk_seq', 3, true);


--
-- Name: categories_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.categories_pk_seq', 4, true);


--
-- Name: chat_messages_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.chat_messages_pk_seq', 1, false);


--
-- Name: chat_participants_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.chat_participants_pk_seq', 1, false);


--
-- Name: chats_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.chats_pk_seq', 1, false);


--
-- Name: cities_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.cities_pk_seq', 2, true);


--
-- Name: countries_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.countries_pk_seq', 1, false);


--
-- Name: documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.documents_pk_seq', 49, true);


--
-- Name: emails_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.emails_pk_seq', 6, true);


--
-- Name: genders_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.genders_pk_seq', 8, true);


--
-- Name: inquiries_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.inquiries_pk_seq', 1, false);


--
-- Name: logs_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.logs_pk_seq', 16, true);


--
-- Name: measurements_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.measurements_pk_seq', 4, true);


--
-- Name: migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.migrations_id_seq', 122, true);


--
-- Name: notifications_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.notifications_pk_seq', 1, false);


--
-- Name: orders_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.orders_pk_seq', 3, true);


--
-- Name: permissions_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.permissions_pk_seq', 1, false);


--
-- Name: product_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.product_documents_pk_seq', 16, true);


--
-- Name: product_ratings_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.product_ratings_pk_seq', 2, true);


--
-- Name: products_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.products_pk_seq', 10, true);


--
-- Name: provinces_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.provinces_pk_seq', 3, true);


--
-- Name: roles_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.roles_pk_seq', 1, true);


--
-- Name: seller_addresses_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.seller_addresses_pk_seq', 2, true);


--
-- Name: sellers_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.sellers_pk_seq', 2, true);


--
-- Name: sessions_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.sessions_pk_seq', 157, true);


--
-- Name: slider_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.slider_documents_pk_seq', 6, true);


--
-- Name: sliders_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.sliders_pk_seq', 5, true);


--
-- Name: statuses_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.statuses_pk_seq', 5, true);


--
-- Name: ticket_messages_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.ticket_messages_pk_seq', 1, false);


--
-- Name: tickets_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.tickets_pk_seq', 1, false);


--
-- Name: user_addresses_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_addresses_pk_seq', 10, true);


--
-- Name: user_cart_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_cart_pk_seq', 1, false);


--
-- Name: user_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_documents_pk_seq', 18, true);


--
-- Name: user_follow_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_follow_pk_seq', 15, true);


--
-- Name: user_permissions_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_permissions_pk_seq', 1, false);


--
-- Name: user_ratings_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_ratings_pk_seq', 1, false);


--
-- Name: users_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.users_pk_seq', 19, true);


--
-- Name: validations_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.validations_pk_seq', 1, false);


--
-- Name: user_cart PK_01e5f67e21c3e8f30fc136a12c8; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_cart
    ADD CONSTRAINT "PK_01e5f67e21c3e8f30fc136a12c8" PRIMARY KEY (pk);


--
-- Name: notifications PK_04d308304a612eb1fa65adccc67; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT "PK_04d308304a612eb1fa65adccc67" PRIMARY KEY (pk);


--
-- Name: articles PK_064099305bf5f0159186ec04516; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT "PK_064099305bf5f0159186ec04516" PRIMARY KEY (pk);


--
-- Name: genders PK_06c7100711db450db56c58e6a4a; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.genders
    ADD CONSTRAINT "PK_06c7100711db450db56c58e6a4a" PRIMARY KEY (pk);


--
-- Name: product_documents PK_194b95eb1e6839da7fd326f57f2; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_documents
    ADD CONSTRAINT "PK_194b95eb1e6839da7fd326f57f2" PRIMARY KEY (pk);


--
-- Name: categories PK_1d00c379b5fe7d9e14cc28e5983; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "PK_1d00c379b5fe7d9e14cc28e5983" PRIMARY KEY (pk);


--
-- Name: ticket_messages PK_24a5545af667e5dd3855d8e0193; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.ticket_messages
    ADD CONSTRAINT "PK_24a5545af667e5dd3855d8e0193" PRIMARY KEY (pk);


--
-- Name: areas PK_32b0d10dade926d2916be2866a9; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT "PK_32b0d10dade926d2916be2866a9" PRIMARY KEY (pk);


--
-- Name: measurements PK_3951ef13064fce84009e120c1a2; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT "PK_3951ef13064fce84009e120c1a2" PRIMARY KEY (pk);


--
-- Name: cities PK_3983857ae38d07febae8ad159cb; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT "PK_3983857ae38d07febae8ad159cb" PRIMARY KEY (pk);


--
-- Name: validations PK_3e616e88eaa4da97bca5e6df43b; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.validations
    ADD CONSTRAINT "PK_3e616e88eaa4da97bca5e6df43b" PRIMARY KEY (pk);


--
-- Name: sellers PK_43efa58eb2ba78d9ca5aec1d198; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sellers
    ADD CONSTRAINT "PK_43efa58eb2ba78d9ca5aec1d198" PRIMARY KEY (pk);


--
-- Name: chat_participants PK_44245b2509b67347b9ee8d3c3fb; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chat_participants
    ADD CONSTRAINT "PK_44245b2509b67347b9ee8d3c3fb" PRIMARY KEY (pk);


--
-- Name: accounts PK_44edaa11cb6fb16b9ce5de21071; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "PK_44edaa11cb6fb16b9ce5de21071" PRIMARY KEY (pk);


--
-- Name: seller_addresses PK_5e2d0bc623e6d84e77283ee8554; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_addresses
    ADD CONSTRAINT "PK_5e2d0bc623e6d84e77283ee8554" PRIMARY KEY (pk);


--
-- Name: product_ratings PK_64b1f0196c3bac699b7fac96081; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_ratings
    ADD CONSTRAINT "PK_64b1f0196c3bac699b7fac96081" PRIMARY KEY (pk);


--
-- Name: provinces PK_69c05911fc04063f46df0e67211; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT "PK_69c05911fc04063f46df0e67211" PRIMARY KEY (pk);


--
-- Name: inquiries PK_6afee441b8cbb085fd0a9c36599; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.inquiries
    ADD CONSTRAINT "PK_6afee441b8cbb085fd0a9c36599" PRIMARY KEY (pk);


--
-- Name: logs PK_6e022a31cec2227e911f1ae8b84; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.logs
    ADD CONSTRAINT "PK_6e022a31cec2227e911f1ae8b84" PRIMARY KEY (pk);


--
-- Name: roles PK_71c3016eb83fc3df705b4e2dcf7; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT "PK_71c3016eb83fc3df705b4e2dcf7" PRIMARY KEY (pk);


--
-- Name: products PK_825bbd0d479bfa8104307f5df08; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "PK_825bbd0d479bfa8104307f5df08" PRIMARY KEY (pk);


--
-- Name: migrations PK_8c82d7f526340ab734260ea46be; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.migrations
    ADD CONSTRAINT "PK_8c82d7f526340ab734260ea46be" PRIMARY KEY (id);


--
-- Name: article_documents PK_8d339ca087cdd924f7a01b98dd7; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.article_documents
    ADD CONSTRAINT "PK_8d339ca087cdd924f7a01b98dd7" PRIMARY KEY (pk);


--
-- Name: slider_documents PK_91ca0530287e2ea2c9ac9f30d93; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.slider_documents
    ADD CONSTRAINT "PK_91ca0530287e2ea2c9ac9f30d93" PRIMARY KEY (pk);


--
-- Name: chats PK_93c7b29c4ca4cfbff40a702aed5; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT "PK_93c7b29c4ca4cfbff40a702aed5" PRIMARY KEY (pk);


--
-- Name: tickets PK_940f149769a6a0a666093341a94; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT "PK_940f149769a6a0a666093341a94" PRIMARY KEY (pk);


--
-- Name: user_ratings PK_974bcf5e5402ffceb365e958bec; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_ratings
    ADD CONSTRAINT "PK_974bcf5e5402ffceb365e958bec" PRIMARY KEY (pk);


--
-- Name: orders PK_9b1292854877d6066ecaf29db1b; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "PK_9b1292854877d6066ecaf29db1b" PRIMARY KEY (pk);


--
-- Name: permissions PK_9e47779cbabd09a6a38caa65bb4; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT "PK_9e47779cbabd09a6a38caa65bb4" PRIMARY KEY (pk);


--
-- Name: sessions PK_9fd0342a5194e500bc4a9f33f66; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "PK_9fd0342a5194e500bc4a9f33f66" PRIMARY KEY (pk);


--
-- Name: emails PK_a8099b95bc71de05f40f14b9bce; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.emails
    ADD CONSTRAINT "PK_a8099b95bc71de05f40f14b9bce" PRIMARY KEY (pk);


--
-- Name: statuses PK_b8c3b833beb7d1a9491f8e793df; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.statuses
    ADD CONSTRAINT "PK_b8c3b833beb7d1a9491f8e793df" PRIMARY KEY (pk);


--
-- Name: users PK_be2c939b44777147d26475d7b76; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "PK_be2c939b44777147d26475d7b76" PRIMARY KEY (pk);


--
-- Name: countries PK_d1546a313dc9b99b28b92dbdabd; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT "PK_d1546a313dc9b99b28b92dbdabd" PRIMARY KEY (pk);


--
-- Name: documents PK_d51b5fdfd4c272abb7dff459f71; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT "PK_d51b5fdfd4c272abb7dff459f71" PRIMARY KEY (pk);


--
-- Name: chat_messages PK_d56fdb666df76b80091f84ac6a2; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT "PK_d56fdb666df76b80091f84ac6a2" PRIMARY KEY (pk);


--
-- Name: sliders PK_d5c41cd97ee92a825710dd20054; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT "PK_d5c41cd97ee92a825710dd20054" PRIMARY KEY (pk);


--
-- Name: user_documents PK_d85a7f53126b84b071fef4a28f1; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_documents
    ADD CONSTRAINT "PK_d85a7f53126b84b071fef4a28f1" PRIMARY KEY (pk);


--
-- Name: user_addresses PK_d870522714299ab5acdbf5b0dfe; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_addresses
    ADD CONSTRAINT "PK_d870522714299ab5acdbf5b0dfe" PRIMARY KEY (pk);


--
-- Name: user_follow PK_dbc9d6d16e3eb775eb0c95c9c7f; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_follow
    ADD CONSTRAINT "PK_dbc9d6d16e3eb775eb0c95c9c7f" PRIMARY KEY (pk);


--
-- Name: user_permissions PK_eb4da454e117d788ad059bd834a; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_permissions
    ADD CONSTRAINT "PK_eb4da454e117d788ad059bd834a" PRIMARY KEY (pk);


--
-- Name: slider_documents REL_2b39adc5dcceaed2af84c4164c; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.slider_documents
    ADD CONSTRAINT "REL_2b39adc5dcceaed2af84c4164c" UNIQUE (document_pk);


--
-- Name: product_documents REL_58dbf7c6faaf83e0072c6d12ad; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_documents
    ADD CONSTRAINT "REL_58dbf7c6faaf83e0072c6d12ad" UNIQUE (document_pk);


--
-- Name: user_documents REL_a13c41ba6dc50faf8ccbd03e77; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_documents
    ADD CONSTRAINT "REL_a13c41ba6dc50faf8ccbd03e77" UNIQUE (document_pk);


--
-- Name: users REL_a4c8323a476859969c4411b314; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "REL_a4c8323a476859969c4411b314" UNIQUE (account_pk);


--
-- Name: sessions REL_b3ce9d7e076c8d130ff3f4c9f0; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "REL_b3ce9d7e076c8d130ff3f4c9f0" UNIQUE (account_pk);


--
-- Name: article_documents REL_bb4a788c78ff0cb48099e72337; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.article_documents
    ADD CONSTRAINT "REL_bb4a788c78ff0cb48099e72337" UNIQUE (document_pk);


--
-- Name: orders UQ_04a64e7c04376e27182f8c0fa17; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "UQ_04a64e7c04376e27182f8c0fa17" UNIQUE (uuid);


--
-- Name: user_addresses UQ_2ed21cb96980c6efe83d315003d; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_addresses
    ADD CONSTRAINT "UQ_2ed21cb96980c6efe83d315003d" UNIQUE (type, address, user_pk);


--
-- Name: cities UQ_302dee32d52ad10e589e36807ad; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT "UQ_302dee32d52ad10e589e36807ad" UNIQUE (name, country_pk, province_pk);


--
-- Name: areas UQ_3d1471be00f3dd46430368f4a90; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT "UQ_3d1471be00f3dd46430368f4a90" UNIQUE (name, country_pk, province_pk, city_pk);


--
-- Name: accounts UQ_477e3187cedfb5a3ac121e899c9; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.accounts
    ADD CONSTRAINT "UQ_477e3187cedfb5a3ac121e899c9" UNIQUE (username);


--
-- Name: sellers UQ_4bb513af6ca73a0a879bc8c93df; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sellers
    ADD CONSTRAINT "UQ_4bb513af6ca73a0a879bc8c93df" UNIQUE (user_pk);


--
-- Name: genders UQ_4ff9b0934ba18fa74dd740b9adb; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.genders
    ADD CONSTRAINT "UQ_4ff9b0934ba18fa74dd740b9adb" UNIQUE (name);


--
-- Name: product_documents UQ_5c1324e2f2bce0de5d7232edf37; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_documents
    ADD CONSTRAINT "UQ_5c1324e2f2bce0de5d7232edf37" UNIQUE (type, product_pk, document_pk);


--
-- Name: user_permissions UQ_6438b98b0fee2d46aef118d2d03; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_permissions
    ADD CONSTRAINT "UQ_6438b98b0fee2d46aef118d2d03" UNIQUE (permission_pk, user_pk);


--
-- Name: roles UQ_648e3f5447f725579d7d4ffdfb7; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT "UQ_648e3f5447f725579d7d4ffdfb7" UNIQUE (name);


--
-- Name: product_ratings UQ_678a82edf3f5c16133d7e56e7a0; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_ratings
    ADD CONSTRAINT "UQ_678a82edf3f5c16133d7e56e7a0" UNIQUE (product_pk, user_pk);


--
-- Name: user_documents UQ_67c735fd04df11a59cf3a8bf258; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_documents
    ADD CONSTRAINT "UQ_67c735fd04df11a59cf3a8bf258" UNIQUE (type, document_pk, user_pk);


--
-- Name: slider_documents UQ_7572cfe57f5ddd318cf687636c7; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.slider_documents
    ADD CONSTRAINT "UQ_7572cfe57f5ddd318cf687636c7" UNIQUE (type, slider_pk, document_pk);


--
-- Name: provinces UQ_75d42aa5be6d814370131cc89eb; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT "UQ_75d42aa5be6d814370131cc89eb" UNIQUE (name, country_pk);


--
-- Name: documents UQ_82e5679ba55008bf3bcb4e7c996; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.documents
    ADD CONSTRAINT "UQ_82e5679ba55008bf3bcb4e7c996" UNIQUE (filename);


--
-- Name: categories UQ_8b0be371d28245da6e4f4b61878; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "UQ_8b0be371d28245da6e4f4b61878" UNIQUE (name);


--
-- Name: countries UQ_8c5497bbb1da6e2e954cd9edcb2; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.countries
    ADD CONSTRAINT "UQ_8c5497bbb1da6e2e954cd9edcb2" UNIQUE (name, code);


--
-- Name: users UQ_951b8f1dfc94ac1d0301a14b7e1; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "UQ_951b8f1dfc94ac1d0301a14b7e1" UNIQUE (uuid);


--
-- Name: products UQ_98086f14e190574534d5129cd7c; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "UQ_98086f14e190574534d5129cd7c" UNIQUE (uuid);


--
-- Name: statuses UQ_98fe0b5835d5d35fb637c8b461a; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.statuses
    ADD CONSTRAINT "UQ_98fe0b5835d5d35fb637c8b461a" UNIQUE (name, type);


--
-- Name: articles UQ_a9ef3572d06fffe448977b67f6b; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT "UQ_a9ef3572d06fffe448977b67f6b" UNIQUE (title, user_pk);


--
-- Name: inquiries UQ_bd30e8ceecbcc4e84987afad8eb; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.inquiries
    ADD CONSTRAINT "UQ_bd30e8ceecbcc4e84987afad8eb" UNIQUE (uuid);


--
-- Name: user_follow UQ_c27ef26001708e5de0960432c67; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_follow
    ADD CONSTRAINT "UQ_c27ef26001708e5de0960432c67" UNIQUE (user_pk, created_by);


--
-- Name: sliders UQ_e2c48ed30a2af9a12c43060744c; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT "UQ_e2c48ed30a2af9a12c43060744c" UNIQUE (type, title);


--
-- Name: seller_addresses UQ_e3caec9d5574f60e0ee7bb4072f; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_addresses
    ADD CONSTRAINT "UQ_e3caec9d5574f60e0ee7bb4072f" UNIQUE (seller_pk, type);


--
-- Name: tickets UQ_e522585e9439011828e606834e4; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT "UQ_e522585e9439011828e606834e4" UNIQUE (uuid);


--
-- Name: measurements UQ_ecda7925be57c32d6f988ac50b6; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.measurements
    ADD CONSTRAINT "UQ_ecda7925be57c32d6f988ac50b6" UNIQUE (name);


--
-- Name: user_ratings UQ_eda9fc304782b1bce210e8d8988; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_ratings
    ADD CONSTRAINT "UQ_eda9fc304782b1bce210e8d8988" UNIQUE (user_pk);


--
-- Name: emails UQ_ee7a49479fc4a5c47be7abc0cac; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.emails
    ADD CONSTRAINT "UQ_ee7a49479fc4a5c47be7abc0cac" UNIQUE (uuid);


--
-- Name: article_documents UQ_f39a0dbd1a7b5dbb075108e9648; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.article_documents
    ADD CONSTRAINT "UQ_f39a0dbd1a7b5dbb075108e9648" UNIQUE (type, article_pk, document_pk);


--
-- Name: chats FK_005ea225def9a3fdbe0bd3b3881; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chats
    ADD CONSTRAINT "FK_005ea225def9a3fdbe0bd3b3881" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: article_documents FK_069e83c9be03fe771d374c47cf1; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.article_documents
    ADD CONSTRAINT "FK_069e83c9be03fe771d374c47cf1" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: products FK_087b7b63770dc1d5dbc8fff4493; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "FK_087b7b63770dc1d5dbc8fff4493" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_follow FK_0888bf4588ae103a36716278bd3; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_follow
    ADD CONSTRAINT "FK_0888bf4588ae103a36716278bd3" FOREIGN KEY (created_by) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: articles FK_0b0b984ae1bced21bdb93d3dc8a; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.articles
    ADD CONSTRAINT "FK_0b0b984ae1bced21bdb93d3dc8a" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: statuses FK_149e2f52bbfc967905c0c0bdd9b; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.statuses
    ADD CONSTRAINT "FK_149e2f52bbfc967905c0c0bdd9b" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_documents FK_163540b25c3a83ef51f39eb0eae; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_documents
    ADD CONSTRAINT "FK_163540b25c3a83ef51f39eb0eae" FOREIGN KEY (product_pk) REFERENCES public.products(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_addresses FK_1cb64ef80c513d283cd0d5f8635; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_addresses
    ADD CONSTRAINT "FK_1cb64ef80c513d283cd0d5f8635" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: article_documents FK_1e343b61e0e545e2a409b5559a8; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.article_documents
    ADD CONSTRAINT "FK_1e343b61e0e545e2a409b5559a8" FOREIGN KEY (article_pk) REFERENCES public.articles(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: seller_addresses FK_2068bbf9e187dd8c5965b9b7f9d; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_addresses
    ADD CONSTRAINT "FK_2068bbf9e187dd8c5965b9b7f9d" FOREIGN KEY (province_pk) REFERENCES public.provinces(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: permissions FK_2116b3e3c38389d94e4db84042e; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.permissions
    ADD CONSTRAINT "FK_2116b3e3c38389d94e4db84042e" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders FK_24f43e4a098e8374aa248515c18; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "FK_24f43e4a098e8374aa248515c18" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_permissions FK_2a4cf7734b89850b083d2beca95; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_permissions
    ADD CONSTRAINT "FK_2a4cf7734b89850b083d2beca95" FOREIGN KEY (permission_pk) REFERENCES public.permissions(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: slider_documents FK_2b39adc5dcceaed2af84c4164c1; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.slider_documents
    ADD CONSTRAINT "FK_2b39adc5dcceaed2af84c4164c1" FOREIGN KEY (document_pk) REFERENCES public.documents(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ticket_messages FK_3cce660c98dfa0a674baddf64fc; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.ticket_messages
    ADD CONSTRAINT "FK_3cce660c98dfa0a674baddf64fc" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cities FK_409e06a8bdc87f875f5736613ce; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT "FK_409e06a8bdc87f875f5736613ce" FOREIGN KEY (country_pk) REFERENCES public.countries(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: seller_addresses FK_45ebe63c11ebf9466b2e63b6328; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_addresses
    ADD CONSTRAINT "FK_45ebe63c11ebf9466b2e63b6328" FOREIGN KEY (seller_pk) REFERENCES public.sellers(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_ratings FK_4ae15cf69728e5c7c2d58fa10a5; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_ratings
    ADD CONSTRAINT "FK_4ae15cf69728e5c7c2d58fa10a5" FOREIGN KEY (created_by) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: sellers FK_4bb513af6ca73a0a879bc8c93df; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sellers
    ADD CONSTRAINT "FK_4bb513af6ca73a0a879bc8c93df" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON DELETE CASCADE;


--
-- Name: notifications FK_4bd59135c194054d593a417a67b; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.notifications
    ADD CONSTRAINT "FK_4bd59135c194054d593a417a67b" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: areas FK_4d737b99d81e1d7ef8f8993890e; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT "FK_4d737b99d81e1d7ef8f8993890e" FOREIGN KEY (country_pk) REFERENCES public.countries(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: chat_messages FK_4dbb69bd0a703cbb7118973dec4; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT "FK_4dbb69bd0a703cbb7118973dec4" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: areas FK_4f64fdad2e022de889053b46031; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT "FK_4f64fdad2e022de889053b46031" FOREIGN KEY (province_pk) REFERENCES public.provinces(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders FK_54bf997fe439e0e2fa61ae724f5; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "FK_54bf997fe439e0e2fa61ae724f5" FOREIGN KEY (seller_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: provinces FK_5742cf772c3598a0b5845474297; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT "FK_5742cf772c3598a0b5845474297" FOREIGN KEY (country_pk) REFERENCES public.countries(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_documents FK_58dbf7c6faaf83e0072c6d12ada; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_documents
    ADD CONSTRAINT "FK_58dbf7c6faaf83e0072c6d12ada" FOREIGN KEY (document_pk) REFERENCES public.documents(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: seller_addresses FK_591201ebf3353380782bd8d559a; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_addresses
    ADD CONSTRAINT "FK_591201ebf3353380782bd8d559a" FOREIGN KEY (area_pk) REFERENCES public.areas(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: areas FK_600ae540b56cd467d3bd87dfd63; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT "FK_600ae540b56cd467d3bd87dfd63" FOREIGN KEY (city_pk) REFERENCES public.cities(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cities FK_66c7e3a28897a16ebce821754aa; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT "FK_66c7e3a28897a16ebce821754aa" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders FK_67252db2edecaf050e60d329ef1; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "FK_67252db2edecaf050e60d329ef1" FOREIGN KEY (measurement_pk) REFERENCES public.measurements(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: slider_documents FK_6bd180179ace4efa37e600b15aa; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.slider_documents
    ADD CONSTRAINT "FK_6bd180179ace4efa37e600b15aa" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: categories FK_78efc20d8d38300f766a4ddd556; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.categories
    ADD CONSTRAINT "FK_78efc20d8d38300f766a4ddd556" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders FK_7bcd70826a0f9b7f272d4dec716; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "FK_7bcd70826a0f9b7f272d4dec716" FOREIGN KEY (status_pk) REFERENCES public.statuses(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: cities FK_7bcdb18ac82a5ff9784c3450386; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.cities
    ADD CONSTRAINT "FK_7bcdb18ac82a5ff9784c3450386" FOREIGN KEY (province_pk) REFERENCES public.provinces(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: ticket_messages FK_7c7563de192fa6595d6e964f168; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.ticket_messages
    ADD CONSTRAINT "FK_7c7563de192fa6595d6e964f168" FOREIGN KEY (ticket_pk) REFERENCES public.tickets(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_cart FK_83598d5bb65ff110b612f8562ad; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_cart
    ADD CONSTRAINT "FK_83598d5bb65ff110b612f8562ad" FOREIGN KEY (product) REFERENCES public.products(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: slider_documents FK_83deded9288542c79217a848ebd; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.slider_documents
    ADD CONSTRAINT "FK_83deded9288542c79217a848ebd" FOREIGN KEY (slider_pk) REFERENCES public.sliders(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: chat_messages FK_86831ac3d50071ca3ecad266341; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chat_messages
    ADD CONSTRAINT "FK_86831ac3d50071ca3ecad266341" FOREIGN KEY (chat_pk) REFERENCES public.chats(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users FK_90bfa02c366e05e2b311d54e409; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_90bfa02c366e05e2b311d54e409" FOREIGN KEY (gender_pk) REFERENCES public.genders(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: products FK_90d98ba1071c1341b895a89ab14; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "FK_90d98ba1071c1341b895a89ab14" FOREIGN KEY (country_pk) REFERENCES public.countries(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: provinces FK_960cc2cdc788d0a0d548d95458e; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.provinces
    ADD CONSTRAINT "FK_960cc2cdc788d0a0d548d95458e" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: emails FK_9654c274ae40ad10fb167d31346; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.emails
    ADD CONSTRAINT "FK_9654c274ae40ad10fb167d31346" FOREIGN KEY (user_pk) REFERENCES public.users(pk);


--
-- Name: sliders FK_99a0ee7fb2e156f99a28107d022; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sliders
    ADD CONSTRAINT "FK_99a0ee7fb2e156f99a28107d022" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_addresses FK_9a6c47b0718d494448330835b1a; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_addresses
    ADD CONSTRAINT "FK_9a6c47b0718d494448330835b1a" FOREIGN KEY (province_pk) REFERENCES public.provinces(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_addresses FK_9f3f2f7634131bf17568002d181; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_addresses
    ADD CONSTRAINT "FK_9f3f2f7634131bf17568002d181" FOREIGN KEY (area_pk) REFERENCES public.areas(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_documents FK_a13c41ba6dc50faf8ccbd03e778; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_documents
    ADD CONSTRAINT "FK_a13c41ba6dc50faf8ccbd03e778" FOREIGN KEY (document_pk) REFERENCES public.documents(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: chat_participants FK_a4069af98889ef5cfbb2bfbad43; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chat_participants
    ADD CONSTRAINT "FK_a4069af98889ef5cfbb2bfbad43" FOREIGN KEY (chat_pk) REFERENCES public.chats(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users FK_a4c8323a476859969c4411b314c; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_a4c8323a476859969c4411b314c" FOREIGN KEY (account_pk) REFERENCES public.accounts(pk) ON DELETE CASCADE;


--
-- Name: user_follow FK_a603cce8779771444065d57af6b; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_follow
    ADD CONSTRAINT "FK_a603cce8779771444065d57af6b" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: chat_participants FK_a9878e03b84889dc847a754712e; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.chat_participants
    ADD CONSTRAINT "FK_a9878e03b84889dc847a754712e" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_permissions FK_ae3d3845dfb792c768617a727c2; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_permissions
    ADD CONSTRAINT "FK_ae3d3845dfb792c768617a727c2" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_documents FK_b07a63ec272ea39a8b92285beef; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_documents
    ADD CONSTRAINT "FK_b07a63ec272ea39a8b92285beef" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: sessions FK_b3ce9d7e076c8d130ff3f4c9f0d; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.sessions
    ADD CONSTRAINT "FK_b3ce9d7e076c8d130ff3f4c9f0d" FOREIGN KEY (account_pk) REFERENCES public.accounts(pk);


--
-- Name: users FK_b6ff5319afbbcdc5d6ba39fc237; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_b6ff5319afbbcdc5d6ba39fc237" FOREIGN KEY (country_pk) REFERENCES public.countries(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_ratings FK_b86225105733a81a7c6b377fb0e; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_ratings
    ADD CONSTRAINT "FK_b86225105733a81a7c6b377fb0e" FOREIGN KEY (product_pk) REFERENCES public.products(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: article_documents FK_bb4a788c78ff0cb48099e723374; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.article_documents
    ADD CONSTRAINT "FK_bb4a788c78ff0cb48099e723374" FOREIGN KEY (document_pk) REFERENCES public.documents(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_documents FK_c2a31d48a1a28fcbd39a33ef1e0; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_documents
    ADD CONSTRAINT "FK_c2a31d48a1a28fcbd39a33ef1e0" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: users FK_c5e1ba58b1cc5445df23858316d; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_c5e1ba58b1cc5445df23858316d" FOREIGN KEY (role_pk) REFERENCES public.roles(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: product_ratings FK_c64a9f619d1b77aff058bfb3965; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.product_ratings
    ADD CONSTRAINT "FK_c64a9f619d1b77aff058bfb3965" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: tickets FK_ca5edfe6f0d777ea434b2c38e2f; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.tickets
    ADD CONSTRAINT "FK_ca5edfe6f0d777ea434b2c38e2f" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_addresses FK_d4bb65617a07f66dea66a72c171; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_addresses
    ADD CONSTRAINT "FK_d4bb65617a07f66dea66a72c171" FOREIGN KEY (city_pk) REFERENCES public.cities(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: products FK_d7c53be4de5a0e5c0a6480190b1; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "FK_d7c53be4de5a0e5c0a6480190b1" FOREIGN KEY (measurement_pk) REFERENCES public.measurements(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: logs FK_de0e721ac793bb61a906bca5793; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.logs
    ADD CONSTRAINT "FK_de0e721ac793bb61a906bca5793" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: areas FK_e757fbac3b11ac31a83c1cb9b80; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.areas
    ADD CONSTRAINT "FK_e757fbac3b11ac31a83c1cb9b80" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_ratings FK_eda9fc304782b1bce210e8d8988; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_ratings
    ADD CONSTRAINT "FK_eda9fc304782b1bce210e8d8988" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: seller_addresses FK_edd256579431192756f567dd343; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_addresses
    ADD CONSTRAINT "FK_edd256579431192756f567dd343" FOREIGN KEY (city_pk) REFERENCES public.cities(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: products FK_f1dcdc10e32856a4e2891574511; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.products
    ADD CONSTRAINT "FK_f1dcdc10e32856a4e2891574511" FOREIGN KEY (category_pk) REFERENCES public.categories(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: orders FK_f1ee64dee5a60aa04c95c4002e0; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.orders
    ADD CONSTRAINT "FK_f1ee64dee5a60aa04c95c4002e0" FOREIGN KEY (product_pk) REFERENCES public.products(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_cart FK_fad0961704191dd465eca58cf6e; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_cart
    ADD CONSTRAINT "FK_fad0961704191dd465eca58cf6e" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

