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
    archived boolean DEFAULT false NOT NULL,
    url text NOT NULL
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
    seller_pk integer NOT NULL
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
    category_pk integer NOT NULL,
    date_available timestamp with time zone DEFAULT now() NOT NULL
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
-- Name: seller_documents; Type: TABLE; Schema: public; Owner: samdhana
--

CREATE TABLE public.seller_documents (
    pk integer NOT NULL,
    seller_pk integer NOT NULL,
    type text NOT NULL,
    document_pk integer NOT NULL,
    date_created timestamp with time zone DEFAULT now() NOT NULL
);


ALTER TABLE public.seller_documents OWNER TO samdhana;

--
-- Name: seller_documents_pk_seq; Type: SEQUENCE; Schema: public; Owner: samdhana
--

CREATE SEQUENCE public.seller_documents_pk_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.seller_documents_pk_seq OWNER TO samdhana;

--
-- Name: seller_documents_pk_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: samdhana
--

ALTER SEQUENCE public.seller_documents_pk_seq OWNED BY public.seller_documents.pk;


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
    archived boolean DEFAULT false NOT NULL,
    "order" integer
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
    message text,
    anonymous boolean DEFAULT false NOT NULL
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
-- Name: seller_documents pk; Type: DEFAULT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_documents ALTER COLUMN pk SET DEFAULT nextval('public.seller_documents_pk_seq'::regclass);


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
136	email02@gmail.com	$2b$10$FQOoLE9s5c4zb78zRfh6MebVMk/cnaBrIiwIVV73aYNuCHqXZUlq6	t	f	f
137	email03@gmail.com	$2b$10$bSRYYxQiYSMnhPzt3GFPdegLzZfSxRmMxKCBSX3JfQ2sewJv0F6Na	t	f	f
138	email10@gmail.com	$2b$10$FDiA0VVi1wGYp.1u6ijKVed9vzJGkW8nqiaeVxXvUu45Eb.fXF8o2	t	f	f
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

COPY public.articles (pk, title, description, user_pk, date_created, archived, url) FROM stdin;
4	Successful Farming	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	19	2022-10-08 16:07:57.376816+08	f	https://www.agriculture.com/
1	Future of Farming	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	19	2022-10-08 14:57:38.921818+08	f	https://www.clariant.com/en/Business-Units/Industrial-and-Consumer-Specialties/Agrochemicals/Glufosinate-Adjuwex?utm_source=google&utm_medium=ads&utm_campaign=CropSolutions&utm_term=new%20farming&utm_content=adjuwex&utm_term=new%20farming&utm_campaign=&utm_source=adwords&utm_medium=ppc&hsa_acc=9106965265&hsa_cam=18081510944&hsa_grp=139995772733&hsa_ad=617000980485&hsa_src=g&hsa_tgt=kwd-295942304856&hsa_kw=new%20farming&hsa_mt=b&hsa_net=adwords&hsa_ver=3&gclid=CjwKCAjw5P2aBhAlEiwAAdY7dMMTcmgubNWIydETlmCgwNtb6gqD_2R2qUGMaZBkgOgMWWrLmEzQjxoCUf8QAvD_BwE
2	Losing the Farm	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	19	2022-10-08 16:07:57.372157+08	f	https://beltmag.com/losing-the-farm/?gclid=CjwKCAjw5P2aBhAlEiwAAdY7dFB7PezE3feLXxBof4V-NcSNobIg7-puKZ5q5vzjZovs6qihxplvdxoCM_4QAvD_BwE
3	Agronomy Articles	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	19	2022-10-08 16:07:57.376816+08	f	https://www.agronomy.org/publications?gclid=CjwKCAjw5P2aBhAlEiwAAdY7dMAyizv6ygPlTmaDajFeP0xUnpzoQ01yZKaObFQVuD2XCOi-He3xLRoChZYQAvD_BwE
\.


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.categories (pk, name, user_pk, date_created, archived) FROM stdin;
2	Fruits	4	2022-10-13 05:00:07.434987+08	f
3	Seeds	4	2022-10-13 05:00:07.440535+08	f
4	Herbs	4	2022-10-13 05:00:07.444911+08	f
5	Roots	4	2022-10-13 05:00:07.444911+08	f
1	Vegetables	4	2022-10-13 05:00:07.426061+08	f
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
50	image_picker4892559788878169461.jpg	1666823831581.66081efd-9bc4-4b0b-b3f7-06430065fd8f.d503ce68-cdbd-4540-bc8d-9c3ef69d6d3e.dbf3bf5e-3f97-43b2-ac3e-77e9e9c6e5db.64040e0633bb5c9d.jpg	assets/images/1666823831581.66081efd-9bc4-4b0b-b3f7-06430065fd8f.d503ce68-cdbd-4540-bc8d-9c3ef69d6d3e.dbf3bf5e-3f97-43b2-ac3e-77e9e9c6e5db.64040e0633bb5c9d.jpg	image/jpg	145845	2022-10-27 06:37:11.672587+08	f
51	IMG_20221027_063639.jpg	1666911187510.aa681af2-046f-4a15-872c-6786e7e60d1a.da09fcf9-e185-4436-8c03-03f718773677.9edb1075-3c61-43e5-8e53-b93de31eeb62.deb3f0b21048c725d.jpg	assets/images/1666911187510.aa681af2-046f-4a15-872c-6786e7e60d1a.da09fcf9-e185-4436-8c03-03f718773677.9edb1075-3c61-43e5-8e53-b93de31eeb62.deb3f0b21048c725d.jpg	image/jpg	145845	2022-10-28 06:53:07.678533+08	f
52	IMG_20221027_063639.jpg	1666996373390.27807b8b-3710-4dcf-b1c1-0b76d148ef49.cebe9605-100c-49d4-8fbf-87f7a8d67c2c.8bfac78f-2b86-4a3d-a0d2-679740a17229.2aa491032b823a990.jpg	assets/images/1666996373390.27807b8b-3710-4dcf-b1c1-0b76d148ef49.cebe9605-100c-49d4-8fbf-87f7a8d67c2c.8bfac78f-2b86-4a3d-a0d2-679740a17229.2aa491032b823a990.jpg	image/jpg	145845	2022-10-29 06:32:53.427019+08	f
53	IMG_20221027_063639.jpg	1666996867366.a4755444-c7f9-4d6f-b9d6-dd0bb77e8738.05808f75-79ab-42f5-8a36-13df034bbd42.084fa093-f492-4a2f-b310-01b5756e8e9e.1926d749b4f1061ce.jpg	assets/images/1666996867366.a4755444-c7f9-4d6f-b9d6-dd0bb77e8738.05808f75-79ab-42f5-8a36-13df034bbd42.084fa093-f492-4a2f-b310-01b5756e8e9e.1926d749b4f1061ce.jpg	image/jpg	145845	2022-10-29 06:41:07.374597+08	f
54	IMG_20221027_063639.jpg	1666996934188.8ee5e92f-137f-4b55-8f3a-09f9dca4b095.a6e6b326-26f5-41fd-a555-64b30f7f3627.3272c4fa-910a-4f7a-ab6c-fabafb7e65c6.2fc707aadded5553.jpg	assets/images/1666996934188.8ee5e92f-137f-4b55-8f3a-09f9dca4b095.a6e6b326-26f5-41fd-a555-64b30f7f3627.3272c4fa-910a-4f7a-ab6c-fabafb7e65c6.2fc707aadded5553.jpg	image/jpg	145845	2022-10-29 06:42:14.311505+08	f
55	IMG_20221027_063639.jpg	1666997059307.2c39616c-6012-428a-9a14-d97ed6aab036.665e16c5-61a6-4dd0-ab90-2ccdaccefe2f.18ec1565-c865-4af3-b5df-39f968aa1322.d3bb6105101982b4ec.jpg	assets/images/1666997059307.2c39616c-6012-428a-9a14-d97ed6aab036.665e16c5-61a6-4dd0-ab90-2ccdaccefe2f.18ec1565-c865-4af3-b5df-39f968aa1322.d3bb6105101982b4ec.jpg	image/jpg	145845	2022-10-29 06:44:19.410639+08	f
56	IMG_20221027_063639.jpg	1666997094991.1f62c365-448e-4d28-b19b-d1f13d7b6fce.365d8f35-0a63-41ec-ac1d-b90b7c24b4be.80f49585-de47-4963-8a49-a6a203ff2dcd.25ac9a37b578d4c6.jpg	assets/images/1666997094991.1f62c365-448e-4d28-b19b-d1f13d7b6fce.365d8f35-0a63-41ec-ac1d-b90b7c24b4be.80f49585-de47-4963-8a49-a6a203ff2dcd.25ac9a37b578d4c6.jpg	image/jpg	145845	2022-10-29 06:44:55.098742+08	f
57	IMG_20221027_063639.jpg	1666997136640.c1be690a-663c-400a-858f-d17b3e987714.caaaeccf-f150-4cb3-bfae-ded08932966f.66c08eb7-cf87-4346-a6c9-88723edde69e.8e19243f28ed8bf1.jpg	assets/images/1666997136640.c1be690a-663c-400a-858f-d17b3e987714.caaaeccf-f150-4cb3-bfae-ded08932966f.66c08eb7-cf87-4346-a6c9-88723edde69e.8e19243f28ed8bf1.jpg	image/jpg	145845	2022-10-29 06:45:36.799674+08	f
58	IMG_20221027_063639.jpg	1666997207448.96b36747-af1e-4300-a871-4c92c1077e4e.c62d51db-784c-4ec8-8c46-f831f8c0b5e3.cde083b4-b95d-4fad-94fe-774168bc5435.391c641468dad49f.jpg	assets/images/1666997207448.96b36747-af1e-4300-a871-4c92c1077e4e.c62d51db-784c-4ec8-8c46-f831f8c0b5e3.cde083b4-b95d-4fad-94fe-774168bc5435.391c641468dad49f.jpg	image/jpg	145845	2022-10-29 06:46:47.59321+08	f
59	IMG_20221027_063639.jpg	1666997341749.f1088f59-c436-4b05-9486-5964be735368.c927b63e-e21e-4e6c-af8e-2182ce199486.2312a709-9567-4abb-954b-4671e3b108dc.d81a7f268e76102b0.jpg	assets/images/1666997341749.f1088f59-c436-4b05-9486-5964be735368.c927b63e-e21e-4e6c-af8e-2182ce199486.2312a709-9567-4abb-954b-4671e3b108dc.d81a7f268e76102b0.jpg	image/jpg	145845	2022-10-29 06:49:01.889975+08	f
60	IMG_20221027_063639.jpg	1667002936882.f85a0135-928f-4bbd-b1bc-acb5f62307c6.a0c558ba-671f-4887-8eec-47ad6be862d0.e57a6b3e-0d71-4b0a-87be-7e556e73a177.d12d5d0600fe02ea.jpg	assets/images/1667002936882.f85a0135-928f-4bbd-b1bc-acb5f62307c6.a0c558ba-671f-4887-8eec-47ad6be862d0.e57a6b3e-0d71-4b0a-87be-7e556e73a177.d12d5d0600fe02ea.jpg	image/jpg	145845	2022-10-29 08:22:16.894147+08	f
61	IMG_20221027_063639.jpg	1667003803526.d9936630-3034-4ce0-bcd5-c83d0aadf416.23a7bc69-49a2-40d4-ba70-be4ede19c302.7cf85edd-e2dd-4f1d-af36-402c19eef5f9.a53210290138435a4.jpg	assets/images/1667003803526.d9936630-3034-4ce0-bcd5-c83d0aadf416.23a7bc69-49a2-40d4-ba70-be4ede19c302.7cf85edd-e2dd-4f1d-af36-402c19eef5f9.a53210290138435a4.jpg	image/jpg	145845	2022-10-29 08:36:43.770351+08	f
62	IMG_20221027_063639.jpg	1667007028084.0121420b-0bcb-4b80-8fc9-afe05925d7c6.c95d8e27-c0f3-4168-9e08-7786de455b8e.c92b918d-0cb8-4c70-9845-a4056f555993.fab5b67e8c1012c710.jpg	assets/images/1667007028084.0121420b-0bcb-4b80-8fc9-afe05925d7c6.c95d8e27-c0f3-4168-9e08-7786de455b8e.c92b918d-0cb8-4c70-9845-a4056f555993.fab5b67e8c1012c710.jpg	image/jpg	145845	2022-10-29 09:30:28.094743+08	f
63	IMG_20221027_063639.jpg	1667008662178.13954511-e498-49fc-81af-b179e62d13fb.d7d54323-b0df-4aa2-9fea-0181668e4a78.27e21071-6afc-4b9a-b1e2-4e55bdaac960.33b8f73d90aa8889.jpg	assets/images/1667008662178.13954511-e498-49fc-81af-b179e62d13fb.d7d54323-b0df-4aa2-9fea-0181668e4a78.27e21071-6afc-4b9a-b1e2-4e55bdaac960.33b8f73d90aa8889.jpg	image/jpg	145845	2022-10-29 09:57:42.24697+08	f
64	IMG_20221027_063639.jpg	1667008667630.57680b95-5978-4251-a40c-c80f06b831a8.96bfbcfb-1ab0-41a0-b5f2-1e74dd55cf78.40b85518-bcab-4d39-be45-c65273f94d04.1a8f54b1002e4f611.jpg	assets/images/1667008667630.57680b95-5978-4251-a40c-c80f06b831a8.96bfbcfb-1ab0-41a0-b5f2-1e74dd55cf78.40b85518-bcab-4d39-be45-c65273f94d04.1a8f54b1002e4f611.jpg	image/jpg	145845	2022-10-29 09:57:47.63914+08	f
65	IMG_20221027_063639.jpg	1667008675587.bf44575a-7790-456c-8548-e6a9c5e49016.13792a98-40cc-4516-9b54-69d347eb3a4c.bd8f63be-e70c-46e8-9943-95bac1e69dbc.64a71dc110ab3db2a.jpg	assets/images/1667008675587.bf44575a-7790-456c-8548-e6a9c5e49016.13792a98-40cc-4516-9b54-69d347eb3a4c.bd8f63be-e70c-46e8-9943-95bac1e69dbc.64a71dc110ab3db2a.jpg	image/jpg	145845	2022-10-29 09:57:55.593501+08	f
66	IMG_20221027_063639.jpg	1667012525848.828bd58c-454b-4c8e-922e-bf53382c8c71.d596f427-2de4-4706-96f4-c9c567830364.b2c428b3-f47a-4c08-8bdd-720bc3e16375.d9bf54236f27d9a9.jpg	assets/images/1667012525848.828bd58c-454b-4c8e-922e-bf53382c8c71.d596f427-2de4-4706-96f4-c9c567830364.b2c428b3-f47a-4c08-8bdd-720bc3e16375.d9bf54236f27d9a9.jpg	image/jpg	145845	2022-10-29 11:02:06.0142+08	f
67	IMG_20221027_063639.jpg	1667036694706.2a02a721-8f09-4d21-b3f8-e3c3af14b7e3.4620c012-22fc-4756-b71c-35cc750fd2d2.d6d83cb3-6428-45e2-b584-0774841161aa.df8f5617b210802ac.jpg	assets/images/1667036694706.2a02a721-8f09-4d21-b3f8-e3c3af14b7e3.4620c012-22fc-4756-b71c-35cc750fd2d2.d6d83cb3-6428-45e2-b584-0774841161aa.df8f5617b210802ac.jpg	image/jpg	145845	2022-10-29 17:44:54.878453+08	f
68	IMG_20221027_063639.jpg	1667036698891.4a4a6e2f-9c7b-4105-8f36-8fa08891a12f.4a2adc94-fd52-4a6e-af94-94072b0868d4.283f941f-aa1a-4db4-b491-737221c29bd3.eee686244802b2bd.jpg	assets/images/1667036698891.4a4a6e2f-9c7b-4105-8f36-8fa08891a12f.4a2adc94-fd52-4a6e-af94-94072b0868d4.283f941f-aa1a-4db4-b491-737221c29bd3.eee686244802b2bd.jpg	image/jpg	145845	2022-10-29 17:44:59.013187+08	f
69	IMG_20221027_063639.jpg	1667036703669.7348a892-ccec-48d2-9748-f431792b069c.f4f6c5f1-2ded-4a66-8fde-20eb50df8439.7bf2773d-2de4-4148-a053-d39befbce81b.5e3c55568d10510c8f.jpg	assets/images/1667036703669.7348a892-ccec-48d2-9748-f431792b069c.f4f6c5f1-2ded-4a66-8fde-20eb50df8439.7bf2773d-2de4-4148-a053-d39befbce81b.5e3c55568d10510c8f.jpg	image/jpg	145845	2022-10-29 17:45:03.683641+08	f
70	IMG_20221027_063639.jpg	1667111221874.4dd78d44-fb07-4d84-bd50-a8ca7fd8b109.6541bb8b-b53a-41a3-a040-70a926038c4d.d027bb06-b7ed-4d3e-848f-27a8ed79f4ab.820c3199fceb3549.jpg	assets/images/1667111221874.4dd78d44-fb07-4d84-bd50-a8ca7fd8b109.6541bb8b-b53a-41a3-a040-70a926038c4d.d027bb06-b7ed-4d3e-848f-27a8ed79f4ab.820c3199fceb3549.jpg	image/jpg	145845	2022-10-30 14:27:01.88056+08	f
71	IMG_20221027_063639.jpg	1667111228807.8e317bae-533a-40a9-9686-4cb255de4ce6.8b86c541-d1de-453f-9443-b41f06ade145.b501bbf1-a96d-4122-a146-9e6d962f256d.f64b8fdb92ff58d4.jpg	assets/images/1667111228807.8e317bae-533a-40a9-9686-4cb255de4ce6.8b86c541-d1de-453f-9443-b41f06ade145.b501bbf1-a96d-4122-a146-9e6d962f256d.f64b8fdb92ff58d4.jpg	image/jpg	145845	2022-10-30 14:27:08.812527+08	f
72	IMG_20221027_063639.jpg	1667120939969.60642be2-1cbb-4168-b3e6-2f7cd7ef07e9.92c02525-fb55-4872-9be4-fce538d67613.93171222-11fd-4d49-bc4e-0b058e784fe4.c984e8447ac46956.jpg	assets/images/1667120939969.60642be2-1cbb-4168-b3e6-2f7cd7ef07e9.92c02525-fb55-4872-9be4-fce538d67613.93171222-11fd-4d49-bc4e-0b058e784fe4.c984e8447ac46956.jpg	image/jpg	145845	2022-10-30 17:08:59.992366+08	f
73	IMG_20221027_063639.jpg	1667120944464.66ba93b6-026f-4f0c-84d3-d490d2ba7b74.960bbd46-24b7-479b-8414-8bd438904fbd.b8a0e20b-eae2-41f9-9fc4-a8dd55323b58.64b068c5a6f45219.jpg	assets/images/1667120944464.66ba93b6-026f-4f0c-84d3-d490d2ba7b74.960bbd46-24b7-479b-8414-8bd438904fbd.b8a0e20b-eae2-41f9-9fc4-a8dd55323b58.64b068c5a6f45219.jpg	image/jpg	145845	2022-10-30 17:09:04.46855+08	f
74	IMG_20221027_063639.jpg	1667165523963.1dbd063b-9684-4299-81c0-3a16a63284aa.c7906124-7288-4829-85ff-4d0b99fe786b.0b0432ea-67b8-4dff-8161-dc6b0c606d25.adbdc2b870e61322.jpg	assets/images/1667165523963.1dbd063b-9684-4299-81c0-3a16a63284aa.c7906124-7288-4829-85ff-4d0b99fe786b.0b0432ea-67b8-4dff-8161-dc6b0c606d25.adbdc2b870e61322.jpg	image/jpg	145845	2022-10-31 05:32:04.096614+08	f
75	IMG_20221027_063639.jpg	1667167193590.199acc64-bc25-4d5a-8158-0341c8568f9b.b94de905-c9d6-473d-9bb9-10d3df59994b.c2bb56bb-74f3-418c-aac6-23699a68d2e2.8b5727e1aa9dedeb.jpg	assets/images/1667167193590.199acc64-bc25-4d5a-8158-0341c8568f9b.b94de905-c9d6-473d-9bb9-10d3df59994b.c2bb56bb-74f3-418c-aac6-23699a68d2e2.8b5727e1aa9dedeb.jpg	image/jpg	145845	2022-10-31 05:59:53.597425+08	f
76	IMG_20221027_063639.jpg	1667168072821.dcbd5454-2f88-47b6-b6ae-fbd5c1f7fc58.aec1590a-32b9-4b6f-97df-5b44dcb6d751.3a8757a4-39f2-46dc-be06-205004589d02.4710ed298bbb2410c1.jpg	assets/images/1667168072821.dcbd5454-2f88-47b6-b6ae-fbd5c1f7fc58.aec1590a-32b9-4b6f-97df-5b44dcb6d751.3a8757a4-39f2-46dc-be06-205004589d02.4710ed298bbb2410c1.jpg	image/jpg	145845	2022-10-31 06:14:32.965876+08	f
77	IMG_20221027_063639.jpg	1667190058130.6f166749-f06f-476e-8b6c-6d06dd6da639.3c8b0fc2-08ff-4289-a477-aedec882cbae.1dd74af6-9735-46d1-acd6-7e02ca0de6c3.3ced40a2ca610012d.jpg	assets/images/1667190058130.6f166749-f06f-476e-8b6c-6d06dd6da639.3c8b0fc2-08ff-4289-a477-aedec882cbae.1dd74af6-9735-46d1-acd6-7e02ca0de6c3.3ced40a2ca610012d.jpg	image/jpg	145845	2022-10-31 12:20:58.150114+08	f
78	image_picker8306158446090458802.jpg	1667269631933.e16fb7c4-34a9-4315-a1a0-aa10c940224f.5e4b8d76-93cc-4507-8a4a-fb0dc1fb4c3b.44457a08-c989-4f4e-9bf8-eeac4439de62.dfe926cbf3eb75fc.jpg	assets/images/1667269631933.e16fb7c4-34a9-4315-a1a0-aa10c940224f.5e4b8d76-93cc-4507-8a4a-fb0dc1fb4c3b.44457a08-c989-4f4e-9bf8-eeac4439de62.dfe926cbf3eb75fc.jpg	image/jpg	145845	2022-11-01 10:27:11.954424+08	f
79	1c7350a8-3bcb-48db-b282-7e304551c79c1303719965269133952.jpg	1667269651905.28cfae91-a3f6-46bb-a68c-75b373457981.772fa4b0-8bc6-4f29-86ed-78330bf8838a.204c906f-7917-4e97-86a4-bae6445a2fea.ab8931c807bc3da9.jpg	assets/images/1667269651905.28cfae91-a3f6-46bb-a68c-75b373457981.772fa4b0-8bc6-4f29-86ed-78330bf8838a.204c906f-7917-4e97-86a4-bae6445a2fea.ab8931c807bc3da9.jpg	image/jpg	200653	2022-11-01 10:27:31.913085+08	f
80	IMG_20221027_063639.jpg	1667273778089.5ec52225-c2ef-4d29-9014-b7216127ec56.5a394bbb-3a13-48b8-b2aa-ee6134abf3ca.b5c4d76b-1dbd-4640-a483-13378191e55c.9e79ac7c134210996.jpg	assets/images/1667273778089.5ec52225-c2ef-4d29-9014-b7216127ec56.5a394bbb-3a13-48b8-b2aa-ee6134abf3ca.b5c4d76b-1dbd-4640-a483-13378191e55c.9e79ac7c134210996.jpg	image/jpg	145845	2022-11-01 11:36:18.370647+08	f
81	IMG_20221027_063639.jpg	1667273830511.40f56250-645a-4689-b854-389e5bf22113.b11d0766-65c3-401d-b73a-dfe251d82043.c1e8a394-7993-4817-a576-d7cc4579e5a6.41863c21e95109f101.jpg	assets/images/1667273830511.40f56250-645a-4689-b854-389e5bf22113.b11d0766-65c3-401d-b73a-dfe251d82043.c1e8a394-7993-4817-a576-d7cc4579e5a6.41863c21e95109f101.jpg	image/jpg	145845	2022-11-01 11:37:10.571404+08	f
82	IMG_20221027_063639.jpg	1667273836109.25cd03e8-1840-4fd7-b7fa-38b483727533.6f136657-3584-48a7-af0a-88f7dd331d49.f7d559ef-4e0b-4c10-8d4b-518f2b0e16b7.c35df7667663f63b.jpg	assets/images/1667273836109.25cd03e8-1840-4fd7-b7fa-38b483727533.6f136657-3584-48a7-af0a-88f7dd331d49.f7d559ef-4e0b-4c10-8d4b-518f2b0e16b7.c35df7667663f63b.jpg	image/jpg	145845	2022-11-01 11:37:16.122009+08	f
83	IMG_20221027_063639.jpg	1667273842765.737b09cb-5d65-4493-9568-c9abb02ac6cc.28bd6e46-c50f-470d-b16e-2095c5b6a1e3.b8131725-fdf0-4a50-95b9-bbb7fb441bca.42ac67bf25288306.jpg	assets/images/1667273842765.737b09cb-5d65-4493-9568-c9abb02ac6cc.28bd6e46-c50f-470d-b16e-2095c5b6a1e3.b8131725-fdf0-4a50-95b9-bbb7fb441bca.42ac67bf25288306.jpg	image/jpg	145845	2022-11-01 11:37:22.964778+08	f
84	IMG_20221027_063639.jpg	1667273847706.a602c1e7-3325-40ef-b3b5-a36015ababb7.0824eb5e-15b3-4ba3-b699-7fdd4e73ea72.29bc6ac0-76cf-4ff1-bbbb-0294c9bca534.101dd82eadf53cef3.jpg	assets/images/1667273847706.a602c1e7-3325-40ef-b3b5-a36015ababb7.0824eb5e-15b3-4ba3-b699-7fdd4e73ea72.29bc6ac0-76cf-4ff1-bbbb-0294c9bca534.101dd82eadf53cef3.jpg	image/jpg	145845	2022-11-01 11:37:27.766117+08	f
85	IMG_20221027_063639.jpg	1667276063301.a067be13-412c-4f78-86dd-739fbf8911de.88a88e05-f2cd-4658-88f0-ce09753da1be.4d372f37-ee80-4a6f-972a-2ec7012f7241.3f4ceef46ee1bfb4.jpg	assets/images/1667276063301.a067be13-412c-4f78-86dd-739fbf8911de.88a88e05-f2cd-4658-88f0-ce09753da1be.4d372f37-ee80-4a6f-972a-2ec7012f7241.3f4ceef46ee1bfb4.jpg	image/jpg	145845	2022-11-01 12:14:23.358959+08	f
86	IMG_20221027_063639.jpg	1667276947999.a380c1da-3c51-41e9-bf72-865937b74f7a.87c4380f-acfe-4ee5-8ccd-9b28471f5380.53ac929d-5d3c-4cd7-a92d-719c430985a5.3a30a4483dc6ef97.jpg	assets/images/1667276947999.a380c1da-3c51-41e9-bf72-865937b74f7a.87c4380f-acfe-4ee5-8ccd-9b28471f5380.53ac929d-5d3c-4cd7-a92d-719c430985a5.3a30a4483dc6ef97.jpg	image/jpg	145845	2022-11-01 12:29:08.013723+08	f
87	IMG_20221027_063639.jpg	1667277403227.93ffc10d-9251-4ed4-a3df-62cb2b4de117.51b2f4e5-dbc1-4d78-9202-f444af219d02.048bab0a-c1bf-4c05-afc0-5d18a6d5e599.8d10a064da4a2d26.jpg	assets/images/1667277403227.93ffc10d-9251-4ed4-a3df-62cb2b4de117.51b2f4e5-dbc1-4d78-9202-f444af219d02.048bab0a-c1bf-4c05-afc0-5d18a6d5e599.8d10a064da4a2d26.jpg	image/jpg	145845	2022-11-01 12:36:43.259373+08	f
88	IMG_20221027_063639.jpg	1667278691531.d267ddd6-b063-4f95-a680-63607ac1d32b.759e51d8-df9d-4dc9-92ab-0ce144032868.9baae598-a117-4363-8bf1-cbfc672b8299.97b4edb54d92c42d.jpg	assets/images/1667278691531.d267ddd6-b063-4f95-a680-63607ac1d32b.759e51d8-df9d-4dc9-92ab-0ce144032868.9baae598-a117-4363-8bf1-cbfc672b8299.97b4edb54d92c42d.jpg	image/jpg	145845	2022-11-01 12:58:11.55231+08	f
89	IMG_20221027_063639.jpg	1667281562013.78400d43-6e32-4907-b63c-0c945ebd7ab2.ce36dbf9-b550-4011-b669-985aebf36ce5.8e784a58-29b4-4936-b05f-35d788b4ca68.1dd109429f3e3c5f3.jpg	assets/images/1667281562013.78400d43-6e32-4907-b63c-0c945ebd7ab2.ce36dbf9-b550-4011-b669-985aebf36ce5.8e784a58-29b4-4936-b05f-35d788b4ca68.1dd109429f3e3c5f3.jpg	image/jpg	145845	2022-11-01 13:46:02.144014+08	f
90	IMG_20221027_063639.jpg	1667293131538.6688a596-77c0-42c6-a487-4e6eb1c62c0d.95899e30-4d2f-462a-894f-17812dd8ad14.a3d427bc-6ed1-46c8-b1ab-82f717a9d8cc.5fa8db244f3287910.jpg	assets/images/1667293131538.6688a596-77c0-42c6-a487-4e6eb1c62c0d.95899e30-4d2f-462a-894f-17812dd8ad14.a3d427bc-6ed1-46c8-b1ab-82f717a9d8cc.5fa8db244f3287910.jpg	image/jpg	145845	2022-11-01 16:58:51.635641+08	f
91	image_picker6833512903300773513.jpg	1667294866890.077ca7ca-df54-4105-8443-6a7fcd275943.91c4ae90-947c-433c-a676-7626356be71b.06b69802-2c1c-4fd6-ae3b-b2b77332b59c.04b34311ae3e2f8d.jpg	assets/images/1667294866890.077ca7ca-df54-4105-8443-6a7fcd275943.91c4ae90-947c-433c-a676-7626356be71b.06b69802-2c1c-4fd6-ae3b-b2b77332b59c.04b34311ae3e2f8d.jpg	image/jpg	145845	2022-11-01 17:27:47.259818+08	f
92	c512f430-d491-4f87-8313-e1d3c092b2054046596859780747219.jpg	1667294880434.f2564fc5-4d9a-4b59-8b56-8e22ee51ad8b.dc4f0b67-6d09-4532-bc02-de097400dc28.e0d4515d-a0b7-434a-a4d0-fefc2c0e0367.61f5b2c581ca1ae7.jpg	assets/images/1667294880434.f2564fc5-4d9a-4b59-8b56-8e22ee51ad8b.dc4f0b67-6d09-4532-bc02-de097400dc28.e0d4515d-a0b7-434a-a4d0-fefc2c0e0367.61f5b2c581ca1ae7.jpg	image/jpg	200865	2022-11-01 17:28:00.443399+08	f
93	IMG_20221027_063639.jpg	1667295700662.d6b2dad7-dd3a-4f4e-951b-d3e988463040.6aa77cca-aeba-4d4d-897e-4a7fb93dd40f.392dbe97-32e1-4e17-b80d-57c80822f4fa.781071da7d4cc68a2.jpg	assets/images/1667295700662.d6b2dad7-dd3a-4f4e-951b-d3e988463040.6aa77cca-aeba-4d4d-897e-4a7fb93dd40f.392dbe97-32e1-4e17-b80d-57c80822f4fa.781071da7d4cc68a2.jpg	image/jpg	145845	2022-11-01 17:41:40.785007+08	f
94	IMG_20221027_063639.jpg	1667295706090.f1b80104-a2e0-4878-90ce-eb8752449568.7469b41f-41bf-4f97-bc91-c7fd86fa4c4c.6119c1ec-dae4-42c2-9f4e-092ecf11f2be.dff106aca8610fff46.jpg	assets/images/1667295706090.f1b80104-a2e0-4878-90ce-eb8752449568.7469b41f-41bf-4f97-bc91-c7fd86fa4c4c.6119c1ec-dae4-42c2-9f4e-092ecf11f2be.dff106aca8610fff46.jpg	image/jpg	145845	2022-11-01 17:41:46.10734+08	f
95	IMG_20221027_063639.jpg	1667309952287.4c693326-52de-417f-9f0a-3ca71d8467c6.af6c22cd-a46a-49c1-818c-235ada2bb10d.6334834a-6c92-4a12-b61c-13426234d7ca.17294d559fe31148.jpg	assets/images/1667309952287.4c693326-52de-417f-9f0a-3ca71d8467c6.af6c22cd-a46a-49c1-818c-235ada2bb10d.6334834a-6c92-4a12-b61c-13426234d7ca.17294d559fe31148.jpg	image/jpg	145845	2022-11-01 21:39:12.309079+08	f
96	image_picker7350697543537117637.jpg	1667391620881.8878085e-49e6-49a4-92f1-1cea1ad9c65b.7376bf75-edfd-4f26-9f19-c446b4e578b0.ca67d7cb-5502-4e84-ac2c-486b44135259.b2f2d6d31a95e716.jpg	assets/images/1667391620881.8878085e-49e6-49a4-92f1-1cea1ad9c65b.7376bf75-edfd-4f26-9f19-c446b4e578b0.ca67d7cb-5502-4e84-ac2c-486b44135259.b2f2d6d31a95e716.jpg	image/jpg	145845	2022-11-02 20:20:20.954202+08	f
97	image_picker1874424713150894492.jpg	1667391757300.dbc1f0a5-2c5c-460b-9cae-fd78b15bdeed.9327f77e-7205-4937-9635-f7c281e437e7.9c2b117e-346e-4e62-9fbf-ab39cfd33ce2.cec8d15419ca1973.jpg	assets/images/1667391757300.dbc1f0a5-2c5c-460b-9cae-fd78b15bdeed.9327f77e-7205-4937-9635-f7c281e437e7.9c2b117e-346e-4e62-9fbf-ab39cfd33ce2.cec8d15419ca1973.jpg	image/jpg	145845	2022-11-02 20:22:37.342436+08	f
98	6af434dd-5f07-4bf6-a354-616232db19744231562282912282075.jpg	1667391926806.f8bc6a9c-54b8-48df-981a-07d5a7d32310.5324730d-d066-4609-8413-801dfbe2a4b6.894f3c46-b26e-448d-8b1c-b8d1e02c566a.82482b96671f8c44.jpg	assets/images/1667391926806.f8bc6a9c-54b8-48df-981a-07d5a7d32310.5324730d-d066-4609-8413-801dfbe2a4b6.894f3c46-b26e-448d-8b1c-b8d1e02c566a.82482b96671f8c44.jpg	image/jpg	200594	2022-11-02 20:25:26.816506+08	f
99	image_picker5330372090195730151.jpg	1667394436847.4dd63e63-5a1c-4fb9-a6f1-1d08d03f3e4f.3770da88-3483-4e07-89cc-01da0dc40303.444d905f-6e2b-4128-9ef0-8c939784fd7f.daac9c520c1ee2d0.jpg	assets/images/1667394436847.4dd63e63-5a1c-4fb9-a6f1-1d08d03f3e4f.3770da88-3483-4e07-89cc-01da0dc40303.444d905f-6e2b-4128-9ef0-8c939784fd7f.daac9c520c1ee2d0.jpg	image/jpg	145845	2022-11-02 21:07:16.931872+08	f
100	c045a174-b83b-45cd-8329-c58dd9dc94f95440054583169689844.jpg	1667394449048.e4ac1403-37bb-4b82-8bce-f2bf90280f10.2fc3798e-f4c4-4848-ba16-d42102685603.005a1564-2a17-44fb-a543-a83e08abe623.b10440c3db6ad86e1.jpg	assets/images/1667394449048.e4ac1403-37bb-4b82-8bce-f2bf90280f10.2fc3798e-f4c4-4848-ba16-d42102685603.005a1564-2a17-44fb-a543-a83e08abe623.b10440c3db6ad86e1.jpg	image/jpg	201069	2022-11-02 21:07:29.183572+08	f
101	image_picker2864066173749419930.jpg	1667397397051.f438a62c-019f-4d4b-89e2-74fbca31373b.5c3a8340-0da8-4025-a336-df61b0e14b39.b849db25-02a4-4ebe-8c49-71310325b07a.3330ce417c248c27.jpg	assets/images/1667397397051.f438a62c-019f-4d4b-89e2-74fbca31373b.5c3a8340-0da8-4025-a336-df61b0e14b39.b849db25-02a4-4ebe-8c49-71310325b07a.3330ce417c248c27.jpg	image/jpg	145845	2022-11-02 21:56:37.147005+08	f
102	c86bee89-7b65-42be-a172-3ec5c4e1cfd52939614614718318868.jpg	1667397411009.5d162ec3-518b-4103-b95c-d4ae45158b94.8925c2b9-3b4c-4a31-a496-01a513c5e8dc.8a1fdade-7e82-45ee-b0db-d38273a88ca3.226d13cc66acf921.jpg	assets/images/1667397411009.5d162ec3-518b-4103-b95c-d4ae45158b94.8925c2b9-3b4c-4a31-a496-01a513c5e8dc.8a1fdade-7e82-45ee-b0db-d38273a88ca3.226d13cc66acf921.jpg	image/jpg	200499	2022-11-02 21:56:51.029214+08	f
103	IMG_20221027_063639.jpg	1667428817222.66564538-c88d-4a03-8b28-3c09dbf05974.344d91a6-a2b7-4a6d-99f0-e0d62896724a.00e91fdd-57a3-4610-9bc6-6ed160318a04.6bd58d7e5135fea5.jpg	assets/images/1667428817222.66564538-c88d-4a03-8b28-3c09dbf05974.344d91a6-a2b7-4a6d-99f0-e0d62896724a.00e91fdd-57a3-4610-9bc6-6ed160318a04.6bd58d7e5135fea5.jpg	image/jpg	145845	2022-11-03 06:40:17.307178+08	f
104	IMG_20221027_063639.jpg	1667428822757.4ea8fa8e-b284-4c5f-a1dc-e767e83a6494.0ee57636-cdeb-4982-8184-08907fd387eb.41cf92a4-f7f0-47c8-89dd-36f83ec553bf.81453a0635e01ffd.jpg	assets/images/1667428822757.4ea8fa8e-b284-4c5f-a1dc-e767e83a6494.0ee57636-cdeb-4982-8184-08907fd387eb.41cf92a4-f7f0-47c8-89dd-36f83ec553bf.81453a0635e01ffd.jpg	image/jpg	145845	2022-11-03 06:40:22.771255+08	f
105	IMG_20221027_063639.jpg	1667431112533.468f716e-cd89-4b21-88ec-a6b6a0ca97e9.5479d83e-dc4b-4c30-b939-8324c34e49c6.bb1061d1-a053-49e6-9946-b77ac367d1e6.010ac3a610bc73cc1f.jpg	assets/images/1667431112533.468f716e-cd89-4b21-88ec-a6b6a0ca97e9.5479d83e-dc4b-4c30-b939-8324c34e49c6.bb1061d1-a053-49e6-9946-b77ac367d1e6.010ac3a610bc73cc1f.jpg	image/jpg	145845	2022-11-03 07:18:32.715354+08	f
106	IMG_20221027_063639.jpg	1667432401344.7e0bc404-b1c7-4671-ad2f-6a04579c8b13.b8e46485-d0f9-4f39-a1ac-60628f01f89e.c2dd41d9-fde0-45a6-a102-97cf0f302ebc.c97c9750aa6820c3.jpg	assets/images/1667432401344.7e0bc404-b1c7-4671-ad2f-6a04579c8b13.b8e46485-d0f9-4f39-a1ac-60628f01f89e.c2dd41d9-fde0-45a6-a102-97cf0f302ebc.c97c9750aa6820c3.jpg	image/jpg	145845	2022-11-03 07:40:01.36012+08	f
107	IMG_20220930_182901.jpg	1667944704183.3344926b-ea3f-4069-bb9b-fb39948ad67b.6b1826db-91ec-4508-b34d-4face7f32a6f.cde96248-1b55-428d-96b8-3c37bc56ebb7.2aba472b02c55add.jpg	assets/images/1667944704183.3344926b-ea3f-4069-bb9b-fb39948ad67b.6b1826db-91ec-4508-b34d-4face7f32a6f.cde96248-1b55-428d-96b8-3c37bc56ebb7.2aba472b02c55add.jpg	image/jpg	31385	2022-11-09 05:58:24.19037+08	f
108	IMG_20220930_182847.jpg	1667944708407.73e9c392-e85c-4aab-81d9-85cec4e0864b.9e373e2c-7600-4e15-8176-e083d44303be.e2621bbe-2255-42c6-ba68-de04a20aac4e.b311c4abc150511a.jpg	assets/images/1667944708407.73e9c392-e85c-4aab-81d9-85cec4e0864b.9e373e2c-7600-4e15-8176-e083d44303be.e2621bbe-2255-42c6-ba68-de04a20aac4e.b311c4abc150511a.jpg	image/jpg	145361	2022-11-09 05:58:28.435244+08	f
109	IMG_20220930_182901.jpg	1667944850410.a1b7b136-1c8b-44db-be83-408765e23741.68ecac7c-681e-4b2a-9794-56f41b379cda.1ea63552-f1c7-4787-b61f-f96e352ffc5f.d828fb6cc408a5fc.jpg	assets/images/1667944850410.a1b7b136-1c8b-44db-be83-408765e23741.68ecac7c-681e-4b2a-9794-56f41b379cda.1ea63552-f1c7-4787-b61f-f96e352ffc5f.d828fb6cc408a5fc.jpg	image/jpg	31385	2022-11-09 06:00:50.418363+08	f
110	IMG_20220930_182847.jpg	1667944853335.d4992bb9-0209-49b7-b216-aa2bb7676bd3.5ad0909e-d5c4-49a9-8405-601e455ec51c.7c7e4243-3b6e-47e8-93d4-3a7857ade4ed.03183475d688d538.jpg	assets/images/1667944853335.d4992bb9-0209-49b7-b216-aa2bb7676bd3.5ad0909e-d5c4-49a9-8405-601e455ec51c.7c7e4243-3b6e-47e8-93d4-3a7857ade4ed.03183475d688d538.jpg	image/jpg	145361	2022-11-09 06:00:53.355848+08	f
111	IMG_20220930_182847.jpg	1667945141029.2818d633-d370-43d9-9f6b-e54f85afc153.1c06594f-abdd-46d9-80d5-b09cc65ccb91.89e05397-b8c2-4181-8de9-b02885666a5c.c59a7ee114947a16.jpg	assets/images/1667945141029.2818d633-d370-43d9-9f6b-e54f85afc153.1c06594f-abdd-46d9-80d5-b09cc65ccb91.89e05397-b8c2-4181-8de9-b02885666a5c.c59a7ee114947a16.jpg	image/jpg	145361	2022-11-09 06:05:41.038753+08	f
112	IMG_20220930_182901.jpg	1667945143454.b0709a22-eeca-4976-80af-4fab127b992c.b03126f9-15c4-452d-8a30-ed68ba2ef6f4.32476a3c-c736-40a0-baf4-6f58afe24b90.3a107da7192415f4c.jpg	assets/images/1667945143454.b0709a22-eeca-4976-80af-4fab127b992c.b03126f9-15c4-452d-8a30-ed68ba2ef6f4.32476a3c-c736-40a0-baf4-6f58afe24b90.3a107da7192415f4c.jpg	image/jpg	31385	2022-11-09 06:05:43.494687+08	f
113	IMG_20220930_182847.jpg	1667945297833.eed295a1-0d76-4899-a3cb-112004c391e1.bf2d691c-06df-42e8-a011-2a9af0cc1b78.1e26e0e0-90b2-4a4a-84db-cc0032d94c90.96c48082ec7ebdb6.jpg	assets/images/1667945297833.eed295a1-0d76-4899-a3cb-112004c391e1.bf2d691c-06df-42e8-a011-2a9af0cc1b78.1e26e0e0-90b2-4a4a-84db-cc0032d94c90.96c48082ec7ebdb6.jpg	image/jpg	145361	2022-11-09 06:08:17.848492+08	f
114	IMG_20220930_182901.jpg	1668028462317.47b24f8a-6d95-49ed-832d-71ff723237d9.9af79c2a-6b36-49d4-9ff9-132070f48a80.1d06ccd2-424b-4c9e-9c28-ee41170ea72e.482596f927add7fc.jpg	assets/images/1668028462317.47b24f8a-6d95-49ed-832d-71ff723237d9.9af79c2a-6b36-49d4-9ff9-132070f48a80.1d06ccd2-424b-4c9e-9c28-ee41170ea72e.482596f927add7fc.jpg	image/jpg	31385	2022-11-10 05:14:22.38546+08	f
115	download.jpeg	1668119869854.bc117737-012e-4155-a1d7-6df056eb1697.e479e092-c102-4518-8ba9-9c4c02b283f7.6fc6c046-042a-445f-bcf1-89f10d8b8081.fb1c316eb5b1073bd.jpg	assets/images/1668119869854.bc117737-012e-4155-a1d7-6df056eb1697.e479e092-c102-4518-8ba9-9c4c02b283f7.6fc6c046-042a-445f-bcf1-89f10d8b8081.fb1c316eb5b1073bd.jpg	image/jpg	10762	2022-11-11 06:37:49.858998+08	f
\.


--
-- Data for Name: emails; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.emails (pk, uuid, "from", from_name, "to", to_name, cc, bcc, subject, body, date_created, sent, archived, user_pk) FROM stdin;
3	81ad9382-ec13-4fd7-aec3-334e0f7bcbf4	calm.dream2017@gmail.com	Samdhana Admin	rpascual0802@gmail.com.au	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-10-05 04:44:17.107276+08	true	f	14
4	26b50598-160c-4c0b-89b0-5164aa69938b	calm.dream2017@gmail.com	Samdhana Admin	rpascual0803@gmail.com.au	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-10-05 04:51:25.523334+08	true	f	17
5	d9d9c5c5-4535-431f-99ec-0bf80d436ff8	calm.dream2017@gmail.com	Samdhana Admin	rpascual0804@gmail.com.au	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-10-05 04:56:16.406206+08	true	f	18
6	d72f6d8a-ed85-4ee9-ac0d-df40dac38213	calm.dream2017@gmail.com	Samdhana Admin	email01@gmail.com	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-10-05 05:10:45.232267+08	true	f	19
7	abbb3628-c095-495c-b03e-bf55b942c505	rpascual0812@gmail.com	Samdhana Admin	email02@gmail.com	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-01 10:27:46.155341+08	true	f	20
8	25d0b534-ee85-418e-b150-4e5b37bb6f48	rpascual0812@gmail.com	Samdhana Admin	email03@gmail.com	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-01 17:28:15.553442+08	true	f	21
9	c62efb12-0626-40d5-bc0a-d266a5c27e8a	rpascual0812@gmail.com	Samdhana Admin	email10@gmail.com	One Two	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-02 21:57:04.585676+08	true	f	22
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
17	sellers	10	"{\\"user_pk\\":19,\\"uuid\\":\\"0baa2baf-9588-44d6-b049-507df55f691b\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9172052424\\"}"	19	2022-10-30 17:09:10.130381+08	f
18	sellers	11	"{\\"user_pk\\":19,\\"uuid\\":\\"b416700d-5a21-4529-9dab-ed5c6d49f035\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9172052424\\"}"	19	2022-10-30 17:15:42.943313+08	f
19	sellers	12	"{\\"user_pk\\":19,\\"uuid\\":\\"505041b8-971f-4684-9749-16e46be8839d\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9172052424\\"}"	19	2022-10-30 17:17:01.937952+08	f
20	sellers	13	"{\\"user_pk\\":19,\\"uuid\\":\\"1d8c3ca1-19eb-4338-a62c-8be0fa4d45a9\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9172052424\\"}"	19	2022-10-30 17:18:35.621617+08	f
21	sellers	14	"{\\"user_pk\\":19,\\"uuid\\":\\"5485ceff-c871-4b87-83c2-d0aa1b360b23\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9172052424\\"}"	19	2022-10-30 17:19:22.519015+08	f
22	sellers	15	"{\\"user_pk\\":19,\\"uuid\\":\\"bfa54632-4672-42b1-a0e2-c39dcbe64f0e\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9172052424\\"}"	19	2022-10-30 17:20:02.290539+08	f
23	sellers	16	"{\\"user_pk\\":19,\\"uuid\\":\\"b6d29ac0-6d1a-4659-b59e-111833ab245e\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9172052424\\"}"	19	2022-10-30 17:21:17.27593+08	f
24	sellers	17	"{\\"user_pk\\":19,\\"uuid\\":\\"7ec0c6ba-6e0b-4bdf-8cae-31bfcee804d6\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9172052424\\"}"	19	2022-10-30 17:22:01.18978+08	f
25	products	14	"{\\"user_pk\\":19,\\"uuid\\":\\"97d32c4b-1855-4d78-aa05-794b3e84e8b9\\",\\"type\\":\\"product\\",\\"name\\":\\"DragoFruit\\",\\"measurement\\":\\"1\\"}"	19	2022-10-31 06:08:53.614001+08	f
26	products	16	"{\\"user_pk\\":19,\\"uuid\\":\\"4fcf443e-3a6d-4857-9318-033733ce96b1\\",\\"type\\":\\"product\\",\\"name\\":\\"Test Product 1\\",\\"measurement\\":\\"1\\"}"	19	2022-10-31 06:15:12.009441+08	f
27	products	17	"{\\"user_pk\\":19,\\"uuid\\":\\"bef1d653-d20b-4b78-b26d-2670b97414d0\\",\\"type\\":\\"product\\",\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-10-31 12:21:36.523741+08	f
28	products	22	"{\\"user_pk\\":20,\\"uuid\\":\\"adaf3e31-0bdb-4a16-86cd-eaf9b1ebe718\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Product 3\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-01 12:49:35.383889+08	f
29	products	24	"{\\"user_pk\\":20,\\"uuid\\":\\"1f66b675-72e8-4217-a8f0-92eebdbb143c\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Product 4\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-01 12:58:15.188916+08	f
30	products	25	"{\\"user_pk\\":20,\\"uuid\\":\\"97d67717-389e-48e3-b18f-d1cd220b20c9\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Product 5\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-01 13:46:05.480508+08	f
31	products	26	"{\\"user_pk\\":20,\\"uuid\\":\\"85c37053-7a92-4951-acba-fd12ccb11688\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Product 6\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-01 16:58:57.449599+08	f
32	sellers	18	"{\\"user_pk\\":20,\\"uuid\\":\\"fe9472db-e2c4-4f23-aa9c-8c858c445be0\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9172052424\\"}"	20	2022-11-01 17:42:06.750558+08	f
33	products	1	"{\\"name\\":\\"Sayote\\",\\"measurement\\":\\"1\\"}"	4	2022-11-03 07:18:16.114279+08	f
34	products	1	"{\\"name\\":\\"Sayote\\",\\"measurement\\":\\"1\\"}"	4	2022-11-03 07:18:36.330692+08	f
35	products	1	"{\\"name\\":\\"Sayote\\",\\"measurement\\":\\"1\\"}"	4	2022-11-03 07:40:30.778883+08	f
36	products	1	"{\\"name\\":\\"Sayote\\",\\"measurement\\":\\"1\\"}"	4	2022-11-03 07:41:27.512342+08	f
37	products	27	"{\\"user_pk\\":20,\\"uuid\\":\\"ada63898-5221-4bab-9cd7-f27b6d18a283\\",\\"type\\":\\"product\\",\\"name\\":\\"Product 7\\",\\"measurement\\":\\"1\\"}"	20	2022-11-09 05:58:31.986427+08	f
38	products	28	"{\\"user_pk\\":20,\\"uuid\\":\\"431b2f07-005d-4539-9030-820dc7b47b44\\",\\"type\\":\\"product\\",\\"name\\":\\"Product 8\\",\\"measurement\\":\\"1\\"}"	20	2022-11-09 06:01:07.87513+08	f
39	products	29	"{\\"user_pk\\":20,\\"uuid\\":\\"bc09a3e2-6bf0-42b6-b71a-73f7ec0edfe6\\",\\"type\\":\\"product\\",\\"name\\":\\"Product 9\\",\\"quantity\\":\\"10000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"10000\\"}"	20	2022-11-09 06:05:46.599029+08	f
40	products	30	"{\\"user_pk\\":20,\\"uuid\\":\\"96da893d-6683-46ed-b52f-d3eb113d9e4c\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Seedlesszzzzzzzzz\\",\\"quantity\\":\\"10000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-09 06:08:19.897719+08	f
41	products	31	"{\\"user_pk\\":20,\\"uuid\\":\\"59fd6322-a5ed-48a5-82b7-e294d5884448\\",\\"type\\":\\"product\\",\\"name\\":\\"Product 10\\",\\"quantity\\":\\"100000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"10\\"}"	20	2022-11-10 05:14:28.022066+08	f
42	orders	20	"{\\"uuid\\":\\"9c1821a3-8f5a-460b-8ee5-ed3492e90e5e\\",\\"user_pk\\":20,\\"product_pk\\":\\"28\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	20	2022-11-10 18:51:03.684996+08	f
43	orders	21	"{\\"uuid\\":\\"71d1f58b-d4fd-49ff-b50c-82c8d2da4613\\",\\"user_pk\\":20,\\"product_pk\\":\\"28\\",\\"quantity\\":\\"1000.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	20	2022-11-10 19:26:37.345113+08	f
44	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:34:01.709155+08	f
45	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:40:07.049766+08	f
46	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:41:46.685776+08	f
47	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:42:36.729776+08	f
48	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:42:49.982906+08	f
49	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:44:31.136001+08	f
50	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:45:25.421278+08	f
51	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:45:49.634148+08	f
52	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:46:25.885601+08	f
53	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:49:28.791833+08	f
54	products	17	"{\\"name\\":\\"Product 2\\",\\"measurement\\":\\"1\\"}"	19	2022-11-10 22:51:31.105623+08	f
55	orders	22	"{\\"uuid\\":\\"e91526fe-9f02-49ea-9a80-a9cf45838ff5\\",\\"user_pk\\":20,\\"product_pk\\":\\"17\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	20	2022-11-11 05:58:42.43293+08	f
56	products	33	"{\\"user_pk\\":20,\\"uuid\\":\\"9bbda67d-89e7-4b49-a60b-4dcd07f6d485\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Appple\\",\\"quantity\\":\\"8000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-11 06:39:23.824972+08	f
57	orders	24	"{\\"uuid\\":\\"df4cc6e2-3283-4986-b659-858ce2f7121d\\",\\"user_pk\\":20,\\"product_pk\\":\\"27\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	20	2022-11-12 07:42:59.405454+08	f
58	orders	25	"{\\"uuid\\":\\"3362246d-d582-4017-a84e-3796f9f8f476\\",\\"user_pk\\":20,\\"product_pk\\":\\"28\\",\\"quantity\\":\\"1000.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	20	2022-11-12 08:04:52.15271+08	f
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
21	71d1f58b-d4fd-49ff-b50c-82c8d2da4613	20	28	2000.00	1	0.00	2022-11-10 19:26:37.345113+08	4	f	18
6	692cb7d1-2713-497d-b36f-9dcf4d745c31	20	26	1000.00	2	0.00	2022-11-01 16:58:57.449599+08	3	f	20
5	0fc40ceb-1e8a-49d8-a20c-812bbasdfasdf1191	20	22	300.00	2	6.00	2022-10-25 13:05:21.830443+08	7	f	20
9	5a464b81-feb6-43e0-9e99-42c40f47cfe8	20	30	10000.00	2	0.00	2022-11-09 06:08:19.897719+08	3	f	20
22	e91526fe-9f02-49ea-9a80-a9cf45838ff5	20	17	0.00	1	0.00	2022-11-11 05:58:42.43293+08	2	f	17
23	1cf07671-3658-4dcd-bd02-9d7c1ccdf1b4	20	33	8000.00	1	0.00	2022-11-11 06:39:23.824972+08	6	f	20
24	df4cc6e2-3283-4986-b659-858ce2f7121d	20	27	0.00	1	0.00	2022-11-12 07:42:59.405454+08	1	f	18
25	3362246d-d582-4017-a84e-3796f9f8f476	20	28	2000.00	1	0.00	2022-11-12 08:04:52.15271+08	1	f	18
3	0fc40ceb-1e8a-49d8-a20c-812bbasdfasdf119	19	10	300.00	2	6.00	2022-10-25 13:05:21.830443+08	6	f	4
2	0fc40ceb-1e8a-49d8-a20c-812bbf7f4119	4	7	600.00	2	4.50	2022-10-25 13:05:21.830443+08	1	f	19
20	9c1821a3-8f5a-460b-8ee5-ed3492e90e5e	20	28	16000.00	1	0.00	2022-11-10 18:51:03.684996+08	2	f	18
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
11	4	slide	44	2022-10-10 21:11:44.786618+08	4	t
1	19	slide	26	2022-10-10 21:11:44.786618+08	10	f
12	4	slide	45	2022-10-10 21:11:44.786618+08	9	t
14	4	slide	46	2022-10-10 21:11:44.786618+08	8	t
15	4	slide	48	2022-10-10 21:11:44.786618+08	5	t
16	4	slide	47	2022-10-10 21:11:44.786618+08	6	t
18	19	slide	76	2022-10-31 06:15:12.009441+08	16	f
20	20	slide	87	2022-11-01 12:49:35.383889+08	22	f
22	20	slide	88	2022-11-01 12:58:15.188916+08	24	f
23	20	slide	89	2022-11-01 13:46:05.480508+08	25	t
24	20	slide	90	2022-11-01 16:58:57.449599+08	26	t
27	4	slide	42	2022-11-03 07:41:27.512342+08	1	t
28	4	slide	106	2022-11-03 07:41:27.512342+08	1	f
29	20	slide	107	2022-11-09 05:58:31.986427+08	27	t
30	20	slide	108	2022-11-09 05:58:31.986427+08	27	f
31	20	slide	109	2022-11-09 06:01:07.87513+08	28	t
32	20	slide	110	2022-11-09 06:01:07.87513+08	28	f
33	20	slide	111	2022-11-09 06:05:46.599029+08	29	t
34	20	slide	112	2022-11-09 06:05:46.599029+08	29	f
35	20	slide	113	2022-11-09 06:08:19.897719+08	30	t
36	20	slide	114	2022-11-10 05:14:28.022066+08	31	t
47	19	slide	77	2022-11-10 22:51:31.105623+08	17	t
49	20	slide	115	2022-11-11 06:39:23.824972+08	33	t
\.


--
-- Data for Name: product_ratings; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.product_ratings (pk, user_pk, product_pk, rating, date_created, message, anonymous) FROM stdin;
2	4	10	5.00	2022-10-12 04:56:27.942699+08	\N	f
1	19	10	3.00	2022-10-12 04:19:59.331822+08	aaaaa	t
3	20	8	4.00	2022-11-01 17:35:49.785516+08	Test	f
4	20	14	3.50	2022-11-02 04:56:31.846759+08	1	f
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.products (pk, uuid, user_pk, type, name, date_created, archived, measurement_pk, country_pk, description, quantity, price_from, price_to, category_pk, date_available) FROM stdin;
14	97d32c4b-1855-4d78-aa05-794b3e84e8b9	4	product	DragoFruit	2022-10-31 06:08:53.614001+08	f	1	173	Drago	0.00	0.00	0.00	1	2022-11-10 05:02:55.601472+08
26	db2cf2dc-553b-4c9b-a000-17987143bd60	20	product	Product 6	2022-11-01 16:58:57.449599+08	f	2	173	Test	1000.00	1000.00	5000.00	1	2022-11-10 05:02:55.601472+08
10	deb1eb1b-9a04-40e0-8a0f-c6b7eae98033	4	looking_for	Pechay	2022-09-26 06:05:25.656331+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	200.00	1.50	0.00	4	2022-11-10 05:02:55.601472+08
7	7094d196-c751-418e-bc9c-abb6addf6cd0	19	looking_for	Talong	2022-09-25 11:07:46.24174+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	100.60	30.00	0.00	1	2022-11-10 05:02:55.601472+08
9	28b657f6-82fe-4a64-8c28-a5d7b88f01dd	4	looking_for	Sigarilyas	2022-09-25 13:42:01.719288+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	58.00	41.00	0.00	2	2022-11-10 05:02:55.601472+08
2	d2920281-4b4b-41d5-9344-5bcf2db051d6	4	looking_for	Bell Pepper	2022-09-22 20:20:42.202238+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	2.50	25.00	0.00	2	2022-11-10 05:02:55.601472+08
4	12ef775b-a245-4ba2-8b4b-45c43a10962b	4	looking_for	Upo	2022-09-22 20:23:35.812796+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	3.50	20.00	100.00	1	2022-11-10 05:02:55.601472+08
1	151ea420-3504-4205-90c4-db15b3ed0f40	4	looking_for	Sayote	2022-09-22 19:10:12.571565+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	78.00	40.00	0.00	2	2022-11-10 05:02:55.601472+08
5	78609ea7-68eb-45e8-a938-3f96374136b4	4	looking_for	Mango	2022-09-25 11:01:18.111197+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	10.00	35.00	75.00	4	2022-11-10 05:02:55.601472+08
16	4fcf443e-3a6d-4857-9318-033733ce96b1	19	product	Test Product 1	2022-10-31 06:15:12.009441+08	f	1	173	asdf	0.00	0.00	0.00	1	2022-11-10 05:02:55.601472+08
6	e0a12dba-449f-4710-93ef-50bda50698b9	20	looking_for	Grapes	2022-09-25 11:05:18.67624+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	10.00	3.50	1000.00	3	2022-11-10 05:02:55.601472+08
8	42b2efbf-11f6-4e75-bb91-88d8c0f308a2	4	future_crop	Chili	2022-09-25 11:08:20.003+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	100.00	45.00	0.00	1	2022-11-10 05:02:55.601472+08
27	ebe0e8bb-2cf9-4c1c-a0bc-2ff99f7cdb19	20	product	Product 7	2022-11-09 05:58:31.986427+08	f	1	173	This is product #7	0.00	0.00	0.00	1	2022-11-10 05:02:55.601472+08
24	1f66b675-72e8-4217-a8f0-92eebdbb143c	20	looking_for	Product 4	2022-11-01 12:58:15.188916+08	f	2	173	Test produt	1000.00	1000.00	5000.00	1	2022-11-10 05:02:55.601472+08
28	8f15efc0-dfd7-4fc8-a1e4-37c863518b1c	20	product	Product 8	2022-11-09 06:01:07.87513+08	f	1	173	This is product #8	1000.00	0.00	0.00	1	2022-11-10 05:02:55.601472+08
25	97d67717-389e-48e3-b18f-d1cd220b20c9	20	future_crop	Product 5	2022-11-01 13:46:05.480508+08	f	2	173	Test prduct	1000.00	1000.00	5000.00	1	2022-11-10 05:02:55.601472+08
30	78f80ad0-308f-4d88-b4e9-eb7401e5dbdf	20	product	Seedlesszzzzzzzzz	2022-11-09 06:08:19.897719+08	f	2	173	Test	10000.00	1000.00	5000.00	1	2022-11-10 05:02:55.601472+08
31	114782c5-d17a-4608-91df-788aee7e0f3c	20	future_crop	Product 10	2022-11-10 05:14:28.022066+08	f	1	173	This is product #10	100000.00	10.00	0.00	1	2023-10-05 00:00:00+08
22	adaf3e31-0bdb-4a16-86cd-eaf9b1ebe718	20	product	Product 3	2022-11-01 12:49:35.383889+08	f	2	173	Tes Prdut3	1000.00	1000.00	5000.00	1	2022-11-10 05:02:55.601472+08
29	9daf01fb-f183-4a23-a90d-383d07b7c0eb	20	product	Product 9	2022-11-09 06:05:46.599029+08	t	1	173	This is product #9	10000.00	10000.00	0.00	1	2022-11-10 05:02:55.601472+08
33	622422e3-50ac-4794-8a49-ebaac9840835	20	looking_for	Appple	2022-11-11 06:39:23.824972+08	f	1	173	asd	8000.00	1000.00	5000.00	1	2022-11-11 06:39:23.824972+08
17	bef1d653-d20b-4b78-b26d-2670b97414d0	19	product	Product 2	2022-10-31 12:21:36.523741+08	f	1	173	Test	0.00	0.00	0.00	4	2022-11-07 00:00:00+08
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
10	home	t	3	2	1	asdfasdf	17	2022-10-30 17:22:01.18978+08
11	home	t	3	2	1	Seller 21	18	2022-11-01 17:42:06.750558+08
\.


--
-- Data for Name: seller_documents; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.seller_documents (pk, seller_pk, type, document_pk, date_created) FROM stdin;
3	18	document	93	2022-11-01 17:42:06.750558+08
4	18	profile_photo	94	2022-11-01 17:42:06.750558+08
\.


--
-- Data for Name: sellers; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.sellers (pk, uuid, user_pk, date_created, archived, mobile_number, about) FROM stdin;
1	0fae2433-ba7b-46d8-a7cb-2216a4497f9e	4	2022-10-19 05:17:13.778888+08	f	639162052424	\N
2	0fae2433-ba7b-46d8-a7cb-2216a1111f9e	9	2022-10-19 05:17:13.778888+08	f	639162052424	\N
17	7ec0c6ba-6e0b-4bdf-8cae-31bfcee804d6	19	2022-10-30 17:22:01.18978+08	f	9172052424	\N
18	fe9472db-e2c4-4f23-aa9c-8c858c445be0	20	2022-11-01 17:42:06.750558+08	f	9172052424	\N
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.sessions (pk, token, expiration, date_created, account_pk) FROM stdin;
144	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1haWxAZ21haWwuY29tIiwic3ViIjoxMTMsImlhdCI6MTY2NjU2MDk4NiwiZXhwIjoxNjY2NjA0MTg2fQ.W976m4hhomIkFX3xKzX6ZtRcU_07csI-t5VC1wUxLBg	2022-10-24 17:36:26+08	2022-10-24 05:36:26.819225+08	113
182	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1haWwwMUBnbWFpbC5jb20iLCJzdWIiOjEzNSwiaWF0IjoxNjY3MTg5OTcxLCJleHAiOjE2NjcyMzMxNzF9.DdGkbFdOvwyhSAcQBQts1GjCAzqj7OQI9ppo9gpopnc	2022-11-01 00:19:31+08	2022-10-31 12:19:31.123559+08	135
197	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1haWwwMkBnbWFpbC5jb20iLCJzdWIiOjEzNiwiaWF0IjoxNjY4MDcyNjkzLCJleHAiOjE2OTk2MDg2OTN9.JBwmGxtpXITQdPk3Xg3suKOcanDQQJbqwsGFw2xwwYI	2023-11-10 17:31:33+08	2022-11-10 17:31:33.951344+08	136
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

COPY public.sliders (pk, type, title, details, user_pk, archived, "order") FROM stdin;
2	home	Welcome	Samdhana Community Market sit amet, consectuta adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris	4	f	1
4	home	Three	Samdhana Community Market sit amet, consectuta adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris	4	f	3
5	home	Four	Samdhana Community Market sit amet, consectuta adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris	4	f	4
3	home	Two	Samdhana Community Market sit amet, consectuta adipising elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud execitation ullamco laboris	4	f	2
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
7	orders	Received	2022-10-25 06:28:39.31071+08	f	4
6	orders	Awaiting Confirmation	2022-10-25 06:28:39.31071+08	f	4
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
11	home	3	2	1	Pasig	20	2022-11-01 10:27:46.155341+08	t
12	home	3	2	1	Pasig	21	2022-11-01 17:28:15.553442+08	f
13	home	3	2	1	Palawi	22	2022-11-02 21:57:04.585676+08	f
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
19	20	profile_photo	78	2022-11-01 10:27:46.155341+08
20	20	id_photo	79	2022-11-01 10:27:46.155341+08
21	21	profile_photo	91	2022-11-01 17:28:15.553442+08
22	21	id_photo	92	2022-11-01 17:28:15.553442+08
23	22	profile_photo	101	2022-11-02 21:57:04.585676+08
24	22	id_photo	102	2022-11-02 21:57:04.585676+08
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

COPY public.user_ratings (pk, rating, user_pk, created_by, date_created, message, anonymous) FROM stdin;
1	5.00	20	21	2022-11-01 22:09:33.312034+08	Very good!	f
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.users (pk, uuid, last_name, first_name, middle_name, gender_pk, birthdate, mobile_number, account_pk, archived, email_address, country_pk, date_created, role_pk, about, is_seller) FROM stdin;
22	3255af22-2a1b-4484-ba7e-4cbcf071c73e	Two	One	\N	\N	2016-11-02	9162052424	138	f	email10@gmail.com	173	2022-11-02 21:57:04.585676+08	1	About Me	f
20	685a941b-c5b9-42d2-8197-b06be244b6c2	Pascual	Rafael 20	\N	\N	2015-11-01	9172052424	136	f	email02@gmail.com	173	2022-11-01 10:27:46.155341+08	1	This is about me	f
21	6496c26f-9d54-47ed-8e34-45357f82e75d	Pascual	Rafael 21	\N	\N	2014-11-07	9172052424	137	f	email03@gmail.com	173	2022-11-01 17:28:15.553442+08	1	About Me	f
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

SELECT pg_catalog.setval('public.accounts_pk_seq', 139, true);


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

SELECT pg_catalog.setval('public.articles_pk_seq', 4, true);


--
-- Name: categories_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.categories_pk_seq', 5, true);


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

SELECT pg_catalog.setval('public.documents_pk_seq', 115, true);


--
-- Name: emails_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.emails_pk_seq', 9, true);


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

SELECT pg_catalog.setval('public.logs_pk_seq', 58, true);


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

SELECT pg_catalog.setval('public.orders_pk_seq', 25, true);


--
-- Name: permissions_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.permissions_pk_seq', 1, false);


--
-- Name: product_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.product_documents_pk_seq', 49, true);


--
-- Name: product_ratings_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.product_ratings_pk_seq', 4, true);


--
-- Name: products_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.products_pk_seq', 33, true);


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

SELECT pg_catalog.setval('public.seller_addresses_pk_seq', 11, true);


--
-- Name: seller_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.seller_documents_pk_seq', 4, true);


--
-- Name: sellers_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.sellers_pk_seq', 18, true);


--
-- Name: sessions_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.sessions_pk_seq', 197, true);


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

SELECT pg_catalog.setval('public.statuses_pk_seq', 7, true);


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

SELECT pg_catalog.setval('public.user_addresses_pk_seq', 13, true);


--
-- Name: user_cart_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_cart_pk_seq', 1, false);


--
-- Name: user_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_documents_pk_seq', 24, true);


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

SELECT pg_catalog.setval('public.user_ratings_pk_seq', 1, true);


--
-- Name: users_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.users_pk_seq', 22, true);


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
-- Name: seller_documents PK_12cbbf7167a10a153c2023723d8; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_documents
    ADD CONSTRAINT "PK_12cbbf7167a10a153c2023723d8" PRIMARY KEY (pk);


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
-- Name: seller_documents REL_9cbb8e1a4cf5797f4d81a31a2e; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_documents
    ADD CONSTRAINT "REL_9cbb8e1a4cf5797f4d81a31a2e" UNIQUE (document_pk);


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
-- Name: seller_documents UQ_81136fafa333a3306e9f20020f3; Type: CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_documents
    ADD CONSTRAINT "UQ_81136fafa333a3306e9f20020f3" UNIQUE (type, document_pk, seller_pk);


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
-- Name: seller_documents FK_9cbb8e1a4cf5797f4d81a31a2e0; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_documents
    ADD CONSTRAINT "FK_9cbb8e1a4cf5797f4d81a31a2e0" FOREIGN KEY (document_pk) REFERENCES public.documents(pk) ON UPDATE CASCADE ON DELETE CASCADE;


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
-- Name: seller_documents FK_f5ba2235894e01d3bd7f3b38bf8; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.seller_documents
    ADD CONSTRAINT "FK_f5ba2235894e01d3bd7f3b38bf8" FOREIGN KEY (seller_pk) REFERENCES public.sellers(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- Name: user_cart FK_fad0961704191dd465eca58cf6e; Type: FK CONSTRAINT; Schema: public; Owner: samdhana
--

ALTER TABLE ONLY public.user_cart
    ADD CONSTRAINT "FK_fad0961704191dd465eca58cf6e" FOREIGN KEY (user_pk) REFERENCES public.users(pk) ON UPDATE CASCADE ON DELETE CASCADE;


--
-- PostgreSQL database dump complete
--

