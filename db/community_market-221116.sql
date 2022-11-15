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
138	email04@gmail.com	$2b$10$bpsQ3DhPK78Y62r6Y2dWx.4hoLJWq8493mFiY2WCt9eKOMOCeP91S	t	f	f
139	cherie.cabrito@gmail.com	$2b$10$xuwqKNNHAJueNl04lriKDue5.fsS/uk2aqWHRTNSX/B1qBrDzaLwy	t	f	f
140	cherie.cabrito@kwmultimedia.ph	$2b$10$5Hpi/nEiT.qcK9AZvrhoqeKp5Yme.T.g0LPjcHOZQKEb9jbnF1pUa	t	f	f
142	hermie.cabrito@kwmultimedia.ph	$2b$10$EyXKT6b4dOFJV/DjK1g88OYx/N0/c/W4lMQuYJeq6UzOK6ZZN5cFa	t	f	f
143	hermie.cabrito@gmail.com	$2b$10$ZexaEdVcy2qB7i3rokBhY.u0bWQYTwYbpkQ3FyAyUShZHIFv3mWYm	t	f	f
144	bernadie@samdhana.org	$2b$10$6KjnVyz0KHSTBK.tUnFOiuUfv/AMUtwoLnLjdKJbr/4uWInCpTa.C	t	f	f
146	wengquins@gmail.com	$2b$10$d3vWdBFBdf3FYQTEyd9lbOsGuOM/O4N0tQJbDowzmxRq/gD2buFnC	t	f	f
147	joanjamisolamin@gmail.com	$2b$10$2rNmkQZ1UxysVbeoBTezgOAz6pZNx7Atbcy5fAOpU0j3Vja7QNBu.	t	f	f
148	lumactodaimsylph@gmail.com	$2b$10$VqgWn9YfR7n8P8btO8RL5Okjlp.6Ttkjr3MZDSzMGVLNbEo5mkwk2	t	f	f
149	alfred@samdhana.org	$2b$10$nz/YjPzZ7lrCUnk97hXhBuUrimVrAnkMbqvOyT3KY8.MFLpd2asNu	t	f	f
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
5	19	4	background	170	2022-10-08 16:08:40.598647+08
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
1	Vegetables	4	2022-10-13 05:00:07.426061+08	f
5	Root Crops	4	2022-10-13 05:00:07.444911+08	f
3	Livestocks	4	2022-10-13 05:00:07.440535+08	f
4	Native Handmade	4	2022-10-13 05:00:07.444911+08	f
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
96	IMG_20221018_170644.jpg	1667333269037.e8641344-1caf-461d-8ecd-1dc98319fac3.a336e942-0960-48ef-8e5a-cd36567901ad.8529ffb0-0fad-4a9a-9893-9c0035e868e2.68f32e2a107444e9c.jpg	assets/images/1667333269037.e8641344-1caf-461d-8ecd-1dc98319fac3.a336e942-0960-48ef-8e5a-cd36567901ad.8529ffb0-0fad-4a9a-9893-9c0035e868e2.68f32e2a107444e9c.jpg	image/jpg	3424870	2022-11-02 04:07:50.453733+08	f
97	images.jpeg	1667333372831.8edffb7c-99dc-4b1b-b8c1-7001a87df6d8.3fed3250-7532-4add-bd61-4706ce4e9f02.c28f8721-4e53-4c54-9e1a-a94044c843ab.978d6ebfcfaf628e.jpg	assets/images/1667333372831.8edffb7c-99dc-4b1b-b8c1-7001a87df6d8.3fed3250-7532-4add-bd61-4706ce4e9f02.c28f8721-4e53-4c54-9e1a-a94044c843ab.978d6ebfcfaf628e.jpg	image/jpg	24872	2022-11-02 04:09:32.864322+08	f
98	images.jpeg	1667333551053.869ae762-7ac8-4934-a225-d3f14580252b.ff5b19ec-d136-4479-b014-4d262cc93655.499d15f3-899f-48ed-8a36-77c12f02657d.f77e86784656bc6f.jpg	assets/images/1667333551053.869ae762-7ac8-4934-a225-d3f14580252b.ff5b19ec-d136-4479-b014-4d262cc93655.499d15f3-899f-48ed-8a36-77c12f02657d.f77e86784656bc6f.jpg	image/jpg	24872	2022-11-02 04:12:31.087574+08	f
99	image_picker5275621489629285450.jpg	1667335645184.57d4d17a-fad0-46f1-9c68-d9b5aa374d6c.dac8f04b-99f6-4c33-84f1-ae82aafac295.5663c8ba-dcea-4934-bae5-21a56aa84380.3b4410bb221029e23d.jpg	assets/images/1667335645184.57d4d17a-fad0-46f1-9c68-d9b5aa374d6c.dac8f04b-99f6-4c33-84f1-ae82aafac295.5663c8ba-dcea-4934-bae5-21a56aa84380.3b4410bb221029e23d.jpg	image/jpg	857580	2022-11-02 04:47:25.954762+08	f
100	image_picker7783720666400257959.jpg	1667335661478.43b17ee2-379f-4637-b7d5-4adc21f76b43.f839940c-bfe8-4483-a877-8470867922e5.69c81077-9856-42ad-ab34-066fea9ffb13.4f281f81de910cf10d.jpg	assets/images/1667335661478.43b17ee2-379f-4637-b7d5-4adc21f76b43.f839940c-bfe8-4483-a877-8470867922e5.69c81077-9856-42ad-ab34-066fea9ffb13.4f281f81de910cf10d.jpg	image/jpg	2063289	2022-11-02 04:47:42.07976+08	f
101	image_picker3551737034933956878.jpg	1667335719164.4f1f753c-106d-496d-8ed9-cc8de3213b5e.db081a73-691f-4f75-9290-5a561e02c12b.b6a9cdca-658b-4b15-9923-51e9aee1ac98.bb8ed7f24424d3ad.jpg	assets/images/1667335719164.4f1f753c-106d-496d-8ed9-cc8de3213b5e.db081a73-691f-4f75-9290-5a561e02c12b.b6a9cdca-658b-4b15-9923-51e9aee1ac98.bb8ed7f24424d3ad.jpg	image/jpg	2040790	2022-11-02 04:48:39.692631+08	f
102	image_picker7663855176396889030.jpg	1667335727556.97d06e59-1b80-433d-b21b-55b9fbed590e.ead18933-592c-4197-81f2-09aa871d98a3.59ae5911-c850-42a5-9df7-661ed9e05ec6.2297ecbee9ee619d.jpg	assets/images/1667335727556.97d06e59-1b80-433d-b21b-55b9fbed590e.ead18933-592c-4197-81f2-09aa871d98a3.59ae5911-c850-42a5-9df7-661ed9e05ec6.2297ecbee9ee619d.jpg	image/jpg	2168085	2022-11-02 04:48:48.141112+08	f
103	0f6f28f2-9c1f-4b53-984f-dc7904aff1878829193335875843469.jpg	1667335746532.ae0b9e96-d2a6-4e54-921e-74e2e10e1026.28f39161-a74d-46b5-8680-779d6bce6572.86149cb7-36de-4dae-924c-1bd6cf9f54f8.c7b9fe8221f5ef25.jpg	assets/images/1667335746532.ae0b9e96-d2a6-4e54-921e-74e2e10e1026.28f39161-a74d-46b5-8680-779d6bce6572.86149cb7-36de-4dae-924c-1bd6cf9f54f8.c7b9fe8221f5ef25.jpg	image/jpg	2842555	2022-11-02 04:49:07.185206+08	f
104	image_picker5357042288255917108.jpg	1667455393576.729c4093-fffc-4146-9087-6b0f5ad01906.10a03e6f-22b8-4ca7-aa64-6a2f296b069e.7ce9b911-3616-4805-8d66-7181bd54a9a3.13b2586f891f2798.jpg	assets/images/1667455393576.729c4093-fffc-4146-9087-6b0f5ad01906.10a03e6f-22b8-4ca7-aa64-6a2f296b069e.7ce9b911-3616-4805-8d66-7181bd54a9a3.13b2586f891f2798.jpg	image/jpg	934687	2022-11-03 14:03:14.459774+08	f
105	e7ed23b9-56ec-446c-ab66-772aeef83ea95795439048672018588.jpg	1667455411384.cdd9ac37-460c-451b-afab-7001814a78e5.ea6c7ad9-ded5-4fdc-91f0-292f3e7750b7.df5a66d3-8c3f-4ab7-9375-af092db39fc0.626618c5d4a42e104.jpg	assets/images/1667455411384.cdd9ac37-460c-451b-afab-7001814a78e5.ea6c7ad9-ded5-4fdc-91f0-292f3e7750b7.df5a66d3-8c3f-4ab7-9375-af092db39fc0.626618c5d4a42e104.jpg	image/jpg	6309976	2022-11-03 14:03:33.247731+08	f
106	image_picker2153054855057622732.jpg	1667455568691.1052c331-b7bb-45d4-a520-db56bc53bc13.9f0d644e-2950-4be9-830b-1bf11e033a1b.d9edd203-fffb-4e5d-8062-02a9653a89bd.2ff0eea8a35710349.jpg	assets/images/1667455568691.1052c331-b7bb-45d4-a520-db56bc53bc13.9f0d644e-2950-4be9-830b-1bf11e033a1b.d9edd203-fffb-4e5d-8062-02a9653a89bd.2ff0eea8a35710349.jpg	image/jpg	934687	2022-11-03 14:06:09.001057+08	f
107	1c275d30-bd01-46a7-b93f-0f827feac9594041123394427118515.jpg	1667455575765.eb88056d-b485-4996-8855-f05875a03850.f5ac565d-6c97-44b9-a3e8-5c238f155911.32f517ef-94db-444b-b3e0-4bdea1007f66.16e62dc6289d71da.jpg	assets/images/1667455575765.eb88056d-b485-4996-8855-f05875a03850.f5ac565d-6c97-44b9-a3e8-5c238f155911.32f517ef-94db-444b-b3e0-4bdea1007f66.16e62dc6289d71da.jpg	image/jpg	6157369	2022-11-03 14:06:16.521596+08	f
108	image_picker6216110971475467334.jpg	1667455896871.d81c6df9-4f72-4b4d-b546-f18ae1e21d55.7a08a9f7-4002-45cc-b5f4-80bcbf0ac911.ca9d45b4-0e92-44d2-b979-da592c2850e5.3f310c3e970fb9cf4.jpg	assets/images/1667455896871.d81c6df9-4f72-4b4d-b546-f18ae1e21d55.7a08a9f7-4002-45cc-b5f4-80bcbf0ac911.ca9d45b4-0e92-44d2-b979-da592c2850e5.3f310c3e970fb9cf4.jpg	image/jpg	153124	2022-11-03 14:11:37.003088+08	f
109	2182b1b3-599d-4c30-aa45-00677efe15991059299298027524613.jpg	1667455904863.87061d08-71bc-4ae2-9142-cdd6032abda9.d07ed1f0-dd11-416b-932d-2b7c6de79b14.c259ca15-2e7a-46fb-9471-d4f1380fce60.5ea3cfe26340361c.jpg	assets/images/1667455904863.87061d08-71bc-4ae2-9142-cdd6032abda9.d07ed1f0-dd11-416b-932d-2b7c6de79b14.c259ca15-2e7a-46fb-9471-d4f1380fce60.5ea3cfe26340361c.jpg	image/jpg	6367347	2022-11-03 14:11:46.985799+08	f
110	20221103_141414.jpg	1667456067857.375464ac-1866-4427-bf52-64db554925d7.99fb8363-86cb-4195-9e70-a1822f3626fd.669f5117-4934-481e-8ff4-d52b17b593db.2d3063083c971b74.jpg	assets/images/1667456067857.375464ac-1866-4427-bf52-64db554925d7.99fb8363-86cb-4195-9e70-a1822f3626fd.669f5117-4934-481e-8ff4-d52b17b593db.2d3063083c971b74.jpg	image/jpg	2893062	2022-11-03 14:14:29.261351+08	f
111	20221103_141414.jpg	1667456181550.bbd0cdbb-8c2c-47ca-a6a7-826cc4c7cbc1.1ac08cfb-0d70-4cba-86de-9e6f672a5984.89a592f5-de25-45ae-a54a-7797a733a047.6e5b47132b86cdb0.jpg	assets/images/1667456181550.bbd0cdbb-8c2c-47ca-a6a7-826cc4c7cbc1.1ac08cfb-0d70-4cba-86de-9e6f672a5984.89a592f5-de25-45ae-a54a-7797a733a047.6e5b47132b86cdb0.jpg	image/jpg	2893062	2022-11-03 14:16:22.779141+08	f
112	20221103_141405.jpg	1667456205066.f37d7e0f-fb04-4e24-a80a-942257387560.ec0da064-93e6-497f-b3d7-e3f7466365fe.b4fabbf3-7a2f-474f-8642-b4c48e462550.e666d6656f107cbf9.jpg	assets/images/1667456205066.f37d7e0f-fb04-4e24-a80a-942257387560.ec0da064-93e6-497f-b3d7-e3f7466365fe.b4fabbf3-7a2f-474f-8642-b4c48e462550.e666d6656f107cbf9.jpg	image/jpg	2897540	2022-11-03 14:16:45.611988+08	f
113	20221103_141410.jpg	1667456211387.a8f2b06d-0de7-414f-9b8a-6d314926b7af.71821aae-dd6a-47fe-9b6f-d45c219b1ec2.d03b8b37-a03b-4b1f-94a6-552831364aef.7473a3203183515a.jpg	assets/images/1667456211387.a8f2b06d-0de7-414f-9b8a-6d314926b7af.71821aae-dd6a-47fe-9b6f-d45c219b1ec2.d03b8b37-a03b-4b1f-94a6-552831364aef.7473a3203183515a.jpg	image/jpg	3107144	2022-11-03 14:16:52.006769+08	f
114	20221103_151945.jpg	1667459991527.8bc9bb9d-831b-4037-8208-2ed8842fa17c.f24812fd-b4dc-44a1-80f9-9174a59f1809.c2aa1297-e8e5-4820-8d63-b641d70ba32e.b4a5abb4219107813.jpg	assets/images/1667459991527.8bc9bb9d-831b-4037-8208-2ed8842fa17c.f24812fd-b4dc-44a1-80f9-9174a59f1809.c2aa1297-e8e5-4820-8d63-b641d70ba32e.b4a5abb4219107813.jpg	image/jpg	3044056	2022-11-03 15:20:00.767783+08	f
115	20221103_151945.jpg	1667459999277.e1ea8784-075d-4165-a179-8d2a3bea5df7.3efde429-37cb-4dbd-b0c5-99936e3f784d.4f8bdc34-917d-4a53-bd39-be5bc52bdf3c.dc26aaf4851e3533.jpg	assets/images/1667459999277.e1ea8784-075d-4165-a179-8d2a3bea5df7.3efde429-37cb-4dbd-b0c5-99936e3f784d.4f8bdc34-917d-4a53-bd39-be5bc52bdf3c.dc26aaf4851e3533.jpg	image/jpg	3044056	2022-11-03 15:20:03.918906+08	f
116	20221103_151945.jpg	1667460004728.346d25f8-781a-48ae-8916-fd243411c9c2.de6c3d41-86cd-458c-9ba5-d7bb805fb950.a7201ce1-43e7-468c-9b2f-6a64b0f7e9a1.d94afd10bc8df4c10f.jpg	assets/images/1667460004728.346d25f8-781a-48ae-8916-fd243411c9c2.de6c3d41-86cd-458c-9ba5-d7bb805fb950.a7201ce1-43e7-468c-9b2f-6a64b0f7e9a1.d94afd10bc8df4c10f.jpg	image/jpg	3044056	2022-11-03 15:20:10.294645+08	f
117	images (8).jpeg	1667604535772.5b54ab0b-f90b-4af2-afbb-37010767fd41.a45ef30b-12e8-4d19-a979-c5cd65273233.2ff37c04-bbbc-4716-a036-70d029921b50.087e99be5eac8123.jpg	assets/images/1667604535772.5b54ab0b-f90b-4af2-afbb-37010767fd41.a45ef30b-12e8-4d19-a979-c5cd65273233.2ff37c04-bbbc-4716-a036-70d029921b50.087e99be5eac8123.jpg	image/jpg	8820	2022-11-05 07:28:55.816623+08	f
118	20221105_073422.jpg	1667604909589.7d6889d3-12ee-4b85-afc6-b20761d79f15.2db1ee20-575b-4bd5-8545-f7b8630439c9.bb1f0faa-15be-43af-8657-428376d1a01d.153d1f6079273102d.jpg	assets/images/1667604909589.7d6889d3-12ee-4b85-afc6-b20761d79f15.2db1ee20-575b-4bd5-8545-f7b8630439c9.bb1f0faa-15be-43af-8657-428376d1a01d.153d1f6079273102d.jpg	image/jpg	2975287	2022-11-05 07:35:10.036007+08	f
119	images (11).jpeg	1667605142812.0def19a9-5bd7-4392-a714-0373a6a31762.333a5889-5982-49f6-b48b-6aaea4bd052a.9e83e364-c7c7-4301-8465-a246244b26f5.810b378c10159d776f.jpg	assets/images/1667605142812.0def19a9-5bd7-4392-a714-0373a6a31762.333a5889-5982-49f6-b48b-6aaea4bd052a.9e83e364-c7c7-4301-8465-a246244b26f5.810b378c10159d776f.jpg	image/jpg	62711	2022-11-05 07:39:02.879803+08	f
120	images (10).jpeg	1667605296941.a5c965e9-47ba-4347-a343-5e151b4bc4e2.8cd46712-576b-423f-8e8d-041fc6b2eaf0.bfbbfd32-8906-4a90-8ac9-c4a5b6606312.f92b07352ee2d29c.jpg	assets/images/1667605296941.a5c965e9-47ba-4347-a343-5e151b4bc4e2.8cd46712-576b-423f-8e8d-041fc6b2eaf0.bfbbfd32-8906-4a90-8ac9-c4a5b6606312.f92b07352ee2d29c.jpg	image/jpg	33274	2022-11-05 07:41:36.973219+08	f
121	images (9).jpeg	1667605340757.d32220ee-eab1-4c26-9a87-d57c3d3a714a.5933942b-7aef-4fc3-9055-fd7e71c7228e.facb9523-da47-465e-bcfa-7e2beeac7a99.7fb75e8d3784cc42.jpg	assets/images/1667605340757.d32220ee-eab1-4c26-9a87-d57c3d3a714a.5933942b-7aef-4fc3-9055-fd7e71c7228e.facb9523-da47-465e-bcfa-7e2beeac7a99.7fb75e8d3784cc42.jpg	image/jpg	3673	2022-11-05 07:42:20.760509+08	f
122	image_picker7320965009162788006.jpg	1668007979111.67bd18e2-f78d-47f9-9bd3-b1719a2719f9.816699cc-d42b-4dbd-aa61-6e1ab08930c2.4c7eae49-85ba-4fbf-88a1-b74b2fe7efab.664d2c83ee3a831b.jpg	assets/images/1668007979111.67bd18e2-f78d-47f9-9bd3-b1719a2719f9.816699cc-d42b-4dbd-aa61-6e1ab08930c2.4c7eae49-85ba-4fbf-88a1-b74b2fe7efab.664d2c83ee3a831b.jpg	image/jpg	1134871	2022-11-09 23:32:59.41679+08	f
123	c0ecfcae-c253-4ab5-acd4-9ca89595040f422478185069128889.jpg	1668007997204.48baa587-be5d-4c4a-9e86-6b49e4f05242.22e5952c-5962-4048-acc8-5287e35c0703.9555aa6c-088e-4470-9a7a-ea25e44fe932.de37e310bf151012f8.jpg	assets/images/1668007997204.48baa587-be5d-4c4a-9e86-6b49e4f05242.22e5952c-5962-4048-acc8-5287e35c0703.9555aa6c-088e-4470-9a7a-ea25e44fe932.de37e310bf151012f8.jpg	image/jpg	1914378	2022-11-09 23:33:17.618452+08	f
124	images (12).jpeg	1668014699583.68f1483b-8230-45ee-bf0c-a8a3e7e50644.1ec99019-2be5-4b18-b590-83c110d14b9b.2ec38df0-a71c-45cc-ab90-6f0b185035f4.3b2e2afebd6fbc95.jpg	assets/images/1668014699583.68f1483b-8230-45ee-bf0c-a8a3e7e50644.1ec99019-2be5-4b18-b590-83c110d14b9b.2ec38df0-a71c-45cc-ab90-6f0b185035f4.3b2e2afebd6fbc95.jpg	image/jpg	45043	2022-11-10 01:24:59.687881+08	f
125	images (13).jpeg	1668014724984.3dbb73a4-46c3-4a64-8fca-dd8a8c600db2.e2268621-e397-4aaf-8ff6-9dabab4735cb.f3077783-ef14-4145-8a37-696e70c29750.65571028f73fb102c1.jpg	assets/images/1668014724984.3dbb73a4-46c3-4a64-8fca-dd8a8c600db2.e2268621-e397-4aaf-8ff6-9dabab4735cb.f3077783-ef14-4145-8a37-696e70c29750.65571028f73fb102c1.jpg	image/jpg	20772	2022-11-10 01:25:25.017388+08	f
126	images (13).jpeg	1668014983339.537a5e55-7fa5-4fc9-89c9-0eb06fd1f9d8.37e491ed-8a33-40b0-b857-c9844434e572.0c549c27-9805-4510-8579-a9f6696713e4.96328cecee5d714b.jpg	assets/images/1668014983339.537a5e55-7fa5-4fc9-89c9-0eb06fd1f9d8.37e491ed-8a33-40b0-b857-c9844434e572.0c549c27-9805-4510-8579-a9f6696713e4.96328cecee5d714b.jpg	image/jpg	20772	2022-11-10 01:29:43.410323+08	f
127	images (14).jpeg	1668015070779.76b345f1-1e76-4462-a0f8-724c460b3834.ae4e0ea1-642c-48cc-8d43-23c665d3cf86.416d56dc-fdf3-43c3-b60d-0e67bfc6b7bf.1bf1d618b8e7a80d.jpg	assets/images/1668015070779.76b345f1-1e76-4462-a0f8-724c460b3834.ae4e0ea1-642c-48cc-8d43-23c665d3cf86.416d56dc-fdf3-43c3-b60d-0e67bfc6b7bf.1bf1d618b8e7a80d.jpg	image/jpg	43651	2022-11-10 01:31:10.933243+08	f
128	IMG_20220930_182901.jpg	1668027983157.f0aa25c0-9f34-49b3-826a-2a3248c282a9.1ff94b37-b1e3-40ca-ae70-996192a11f28.7fa22828-c695-449f-a182-6901fe54d71f.b2d2f7a41b93ebfb.jpg	assets/images/1668027983157.f0aa25c0-9f34-49b3-826a-2a3248c282a9.1ff94b37-b1e3-40ca-ae70-996192a11f28.7fa22828-c695-449f-a182-6901fe54d71f.b2d2f7a41b93ebfb.jpg	image/jpg	31385	2022-11-10 05:06:23.187781+08	f
129	IMG_20220930_182901.jpg	1668031083655.b87ecbb9-f172-4406-a34f-ddd11c803534.cf00579e-b0fd-403f-a2a1-f01760b17b37.d71b1b2c-ee19-4697-b54f-81c108aaf032.7df9f1fad0e3cd49.jpg	assets/images/1668031083655.b87ecbb9-f172-4406-a34f-ddd11c803534.cf00579e-b0fd-403f-a2a1-f01760b17b37.d71b1b2c-ee19-4697-b54f-81c108aaf032.7df9f1fad0e3cd49.jpg	image/jpg	31385	2022-11-10 05:58:03.690707+08	f
130	download.jpeg	1668031247201.c754c13c-bc89-4535-8faa-fed37044c895.45a94050-f3e8-4e33-bf74-d0b4fa8ffa02.fb4c19e2-23d9-4f03-827b-4dad6c6cb633.66e9fba123d2d458.jpg	assets/images/1668031247201.c754c13c-bc89-4535-8faa-fed37044c895.45a94050-f3e8-4e33-bf74-d0b4fa8ffa02.fb4c19e2-23d9-4f03-827b-4dad6c6cb633.66e9fba123d2d458.jpg	image/jpg	10762	2022-11-10 06:00:47.23239+08	f
131	images (15).jpeg	1668053991794.95182e62-6c8b-4771-b21d-b0b2b0c609e8.db806ea8-2a29-423c-9168-d126af2710d1.3e4ff227-8631-4b89-b120-0d25371a6525.a5f6ff9e59d9c107c.jpg	assets/images/1668053991794.95182e62-6c8b-4771-b21d-b0b2b0c609e8.db806ea8-2a29-423c-9168-d126af2710d1.3e4ff227-8631-4b89-b120-0d25371a6525.a5f6ff9e59d9c107c.jpg	image/jpg	10660	2022-11-10 12:19:51.82164+08	f
132	images (15).jpeg	1668113339471.bdac84a8-d0b1-4c48-a170-6916ce534d63.87b75bcc-95d2-43bb-92cd-48ec310fa5e0.67743255-cd26-4cff-b573-db66caea5bde.ee25983eff62d9c9.jpg	assets/images/1668113339471.bdac84a8-d0b1-4c48-a170-6916ce534d63.87b75bcc-95d2-43bb-92cd-48ec310fa5e0.67743255-cd26-4cff-b573-db66caea5bde.ee25983eff62d9c9.jpg	image/jpg	10660	2022-11-11 04:48:59.535276+08	f
133	S7deebd03f40847769d7c8b2de8b0c420j.jpg_240x240q80.jpg	1668119134753.7065a20e-d81f-4dfc-9d89-733dc76858ba.f713ab3b-9976-40d7-8f83-0b9c39ecdacc.bbcf9a76-c265-4e0d-8319-e08362cf76a1.212a35eae10649e95.jpg	assets/images/1668119134753.7065a20e-d81f-4dfc-9d89-733dc76858ba.f713ab3b-9976-40d7-8f83-0b9c39ecdacc.bbcf9a76-c265-4e0d-8319-e08362cf76a1.212a35eae10649e95.jpg	image/jpg	8250	2022-11-11 06:25:34.759371+08	f
153	image_picker2450788319447542375.jpg	1668127150334.e9028188-d52d-4e54-a610-4bc93d833de3.3bc1a176-95be-4aa1-a3ad-1c185070a9b3.e23f1dce-3289-420e-b296-d4fdd65b8ee0.cc96fa1c46ba126d.jpg	assets/images/1668127150334.e9028188-d52d-4e54-a610-4bc93d833de3.3bc1a176-95be-4aa1-a3ad-1c185070a9b3.e23f1dce-3289-420e-b296-d4fdd65b8ee0.cc96fa1c46ba126d.jpg	image/jpg	3061974	2022-11-11 08:39:16.702462+08	f
134	S7deebd03f40847769d7c8b2de8b0c420j.jpg_240x240q80.jpg	1668119419610.26d54784-f078-4761-b1c6-15cd7ecc81dd.34cbe724-6659-4da2-975c-4549dfc58910.bc133615-3821-41f2-85d3-8f635688ffbe.6d88308faecb10fd8.jpg	assets/images/1668119419610.26d54784-f078-4761-b1c6-15cd7ecc81dd.34cbe724-6659-4da2-975c-4549dfc58910.bc133615-3821-41f2-85d3-8f635688ffbe.6d88308faecb10fd8.jpg	image/jpg	8250	2022-11-11 06:30:19.619897+08	f
135	S7deebd03f40847769d7c8b2de8b0c420j.jpg_240x240q80.jpg	1668119488297.c1c8e168-4763-495d-9d18-3938fb080c38.49c410b0-c4d7-4445-abf2-55119ea721ff.a9622f42-fe22-465a-a342-ae69dc079db9.101cbc8dc85c9a8c3.jpg	assets/images/1668119488297.c1c8e168-4763-495d-9d18-3938fb080c38.49c410b0-c4d7-4445-abf2-55119ea721ff.a9622f42-fe22-465a-a342-ae69dc079db9.101cbc8dc85c9a8c3.jpg	image/jpg	8250	2022-11-11 06:31:28.335057+08	f
136	20221108_200129.jpg	1668119510339.030c4940-18ef-490b-9c9d-e1bb1f3ffecc.5d5bd60d-489b-4bf8-a33d-1009e2965676.d2b72103-8b65-44ae-8e97-d8004af3c693.8c2a3b0f79ae1a49.jpg	assets/images/1668119510339.030c4940-18ef-490b-9c9d-e1bb1f3ffecc.5d5bd60d-489b-4bf8-a33d-1009e2965676.d2b72103-8b65-44ae-8e97-d8004af3c693.8c2a3b0f79ae1a49.jpg	image/jpg	456691	2022-11-11 06:31:50.551214+08	f
137	images (10).jpeg	1668119617952.e16b5416-4a0d-447c-b112-d0851c4eb1b2.d79e8237-3678-47cf-ace8-83913e8d8358.5fdc2520-3254-405e-8676-b328c517dcea.c0e2d3b6f7f219d8.jpg	assets/images/1668119617952.e16b5416-4a0d-447c-b112-d0851c4eb1b2.d79e8237-3678-47cf-ace8-83913e8d8358.5fdc2520-3254-405e-8676-b328c517dcea.c0e2d3b6f7f219d8.jpg	image/jpg	21197	2022-11-11 06:33:37.992021+08	f
138	images (10).jpeg	1668119671429.bb8b27a6-800c-48d7-b635-b4834585d5f7.9e56fb36-af54-4ec8-81c3-83d01a623eeb.81e31688-5039-4cd5-a742-83a12c56d103.310f7104195dbda6e.jpg	assets/images/1668119671429.bb8b27a6-800c-48d7-b635-b4834585d5f7.9e56fb36-af54-4ec8-81c3-83d01a623eeb.81e31688-5039-4cd5-a742-83a12c56d103.310f7104195dbda6e.jpg	image/jpg	21197	2022-11-11 06:34:31.467767+08	f
139	images (1).jpeg	1668119732743.f5d2f2f2-3cfb-458c-93e2-f57c8ac90628.e737038e-be24-4874-8561-b04af9c64a16.a3ebca64-2973-4c01-852b-5ec3f6b9fc44.840eb36504193c90.jpg	assets/images/1668119732743.f5d2f2f2-3cfb-458c-93e2-f57c8ac90628.e737038e-be24-4874-8561-b04af9c64a16.a3ebca64-2973-4c01-852b-5ec3f6b9fc44.840eb36504193c90.jpg	image/jpg	3024	2022-11-11 06:35:32.751368+08	f
140	image_picker5873744324886789685.jpg	1668120781602.920917de-6628-4aad-a960-7582698aa117.84624a39-a724-4207-93c1-4784d5f308f8.f2487a94-12e4-4b5a-aeb2-54d838257caa.5634dc0119ad972f.jpg	assets/images/1668120781602.920917de-6628-4aad-a960-7582698aa117.84624a39-a724-4207-93c1-4784d5f308f8.f2487a94-12e4-4b5a-aeb2-54d838257caa.5634dc0119ad972f.jpg	image/jpg	21197	2022-11-11 06:53:01.633591+08	f
141	3ccbe835-60fb-4290-8074-03afb6657c808920381532062232625.jpg	1668120793628.cdb62495-99c7-4802-a309-39b8f78c40f4.08583df9-b5a9-48e6-a2c0-11f5590e8cd3.05443efe-e6fa-4cf8-9696-a69026f10e70.274d16510656b2646.jpg	assets/images/1668120793628.cdb62495-99c7-4802-a309-39b8f78c40f4.08583df9-b5a9-48e6-a2c0-11f5590e8cd3.05443efe-e6fa-4cf8-9696-a69026f10e70.274d16510656b2646.jpg	image/jpg	1656413	2022-11-11 06:53:13.985647+08	f
142	images (10).jpeg	1668120837978.134f46f0-a311-4fb7-8c57-371654a6069e.67797da6-2278-42d6-b371-7bfd5c8d121c.3ed6cb68-a550-4d3f-a124-b09e98b78823.ba10868cc12ced35b.jpg	assets/images/1668120837978.134f46f0-a311-4fb7-8c57-371654a6069e.67797da6-2278-42d6-b371-7bfd5c8d121c.3ed6cb68-a550-4d3f-a124-b09e98b78823.ba10868cc12ced35b.jpg	image/jpg	21197	2022-11-11 06:53:58.05148+08	f
143	images (10).jpeg	1668120974452.c9efd37c-fee0-4eb1-bd50-9b3d092a076d.6b6fb856-2ced-49ec-b4aa-905ad4d7ed18.0ddaceb5-2a08-4812-8986-a897eb46d3f3.cc3c1f934497851b.jpg	assets/images/1668120974452.c9efd37c-fee0-4eb1-bd50-9b3d092a076d.6b6fb856-2ced-49ec-b4aa-905ad4d7ed18.0ddaceb5-2a08-4812-8986-a897eb46d3f3.cc3c1f934497851b.jpg	image/jpg	21197	2022-11-11 06:56:14.553112+08	f
144	images (10).jpeg	1668120978285.6d535ddf-73f1-4529-9332-7959a2ecb07d.d5e9d6e8-945d-49ab-902f-9ad451b91e76.0a9145f2-db32-4c73-8e7a-62d24fab1278.54e124275c362ec6.jpg	assets/images/1668120978285.6d535ddf-73f1-4529-9332-7959a2ecb07d.d5e9d6e8-945d-49ab-902f-9ad451b91e76.0a9145f2-db32-4c73-8e7a-62d24fab1278.54e124275c362ec6.jpg	image/jpg	21197	2022-11-11 06:56:18.321523+08	f
145	images (10).jpeg	1668121027113.f1ec152c-7ad9-438b-b25b-719ecb54e811.31535525-8290-4afc-bd2d-3a2d4c2d9454.3fd2339c-265d-48ea-a790-0796c9935cab.66e433b1f9118d6f.jpg	assets/images/1668121027113.f1ec152c-7ad9-438b-b25b-719ecb54e811.31535525-8290-4afc-bd2d-3a2d4c2d9454.3fd2339c-265d-48ea-a790-0796c9935cab.66e433b1f9118d6f.jpg	image/jpg	21197	2022-11-11 06:57:07.143194+08	f
146	images (10).jpeg	1668121097476.38d7a5d5-8209-402b-9c92-1a54040aad8c.a02625a3-d979-4772-af53-6ac84f215b57.2938e5d9-905d-4682-9ffa-7af29ddc4432.40c3a23de4c99d8e.jpg	assets/images/1668121097476.38d7a5d5-8209-402b-9c92-1a54040aad8c.a02625a3-d979-4772-af53-6ac84f215b57.2938e5d9-905d-4682-9ffa-7af29ddc4432.40c3a23de4c99d8e.jpg	image/jpg	21197	2022-11-11 06:58:17.509904+08	f
147	images (15).jpeg	1668123763520.61ad879e-dede-42af-ab10-ff1438351b23.319352b0-e0da-4e66-a0d4-8056df800f00.a47921c7-8707-4b56-8607-1c2ec91d8960.5384d4179abf3de3.jpg	assets/images/1668123763520.61ad879e-dede-42af-ab10-ff1438351b23.319352b0-e0da-4e66-a0d4-8056df800f00.a47921c7-8707-4b56-8607-1c2ec91d8960.5384d4179abf3de3.jpg	image/jpg	10660	2022-11-11 07:42:43.576149+08	f
148	image_picker199420777730822714.jpg	1668126474632.7cf97c83-8ce2-49e4-89a8-d68b271fcafc.0ddabbc2-16a0-4717-8ef5-d4cb549d4df0.4e69e9d8-902a-4db0-894b-0e2b26433d41.45f74410d598f3dc9.jpg	assets/images/1668126474632.7cf97c83-8ce2-49e4-89a8-d68b271fcafc.0ddabbc2-16a0-4717-8ef5-d4cb549d4df0.4e69e9d8-902a-4db0-894b-0e2b26433d41.45f74410d598f3dc9.jpg	image/jpg	1550420	2022-11-11 08:27:56.643007+08	f
149	6fb30594-11ab-4488-bffd-54d9d19083207368107134376851753.jpg	1668126592249.53dd4625-9af2-420e-8a93-a949a6600225.b1f7f571-cb14-4b63-8e61-e35722605a9d.05a038cc-24bc-4d52-a438-f6c3a7f1e322.4946097b91c791010.jpg	assets/images/1668126592249.53dd4625-9af2-420e-8a93-a949a6600225.b1f7f571-cb14-4b63-8e61-e35722605a9d.05a038cc-24bc-4d52-a438-f6c3a7f1e322.4946097b91c791010.jpg	image/jpg	2849654	2022-11-11 08:29:55.376808+08	f
150	image_picker1698009892288644839.jpg	1668126975101.759f5914-45a0-4c99-be41-340bbaee4c40.785346ed-0d0f-43e0-8795-245adb9da6f8.caa0899f-607c-4a52-93c9-c74f093b90d1.14cf96e793ffa1ba.jpg	assets/images/1668126975101.759f5914-45a0-4c99-be41-340bbaee4c40.785346ed-0d0f-43e0-8795-245adb9da6f8.caa0899f-607c-4a52-93c9-c74f093b90d1.14cf96e793ffa1ba.jpg	image/jpg	21197	2022-11-11 08:36:15.124912+08	f
151	ffa6aa5b-291c-4365-9f5c-c32f62d475f31404249648775972484.jpg	1668126993060.dc7dd8e6-cc4b-4926-8733-421511d8f6c1.780f97e9-9940-46b3-8e7b-0ce7c67e7978.a154dd20-96fd-4901-a0b7-f3edc6753941.6100465171068d3259.jpg	assets/images/1668126993060.dc7dd8e6-cc4b-4926-8733-421511d8f6c1.780f97e9-9940-46b3-8e7b-0ce7c67e7978.a154dd20-96fd-4901-a0b7-f3edc6753941.6100465171068d3259.jpg	image/jpg	1862160	2022-11-11 08:36:33.441384+08	f
152	image_picker5612381624353315967.jpg	1668127137497.6afd8540-56de-44dc-a4d5-e6c043499914.e2fe55be-e1f0-4509-b620-1e871ca20746.40d874ed-e0f2-4f65-aec3-8c2f060803c3.87f671f1063579f95.jpg	assets/images/1668127137497.6afd8540-56de-44dc-a4d5-e6c043499914.e2fe55be-e1f0-4509-b620-1e871ca20746.40d874ed-e0f2-4f65-aec3-8c2f060803c3.87f671f1063579f95.jpg	image/jpg	372498	2022-11-11 08:38:58.573602+08	f
154	ae7ce9fb-47bd-4f45-ac8f-282e46f7f2516652653174229751309.jpg	1668127165284.e1114b43-f8c9-43af-aca3-21e7932419bb.c4cfff66-c6e3-47df-8a5f-0b19a09b7e4e.06e3e86a-8796-470c-b423-c7c36d682b45.78c8227436ebc92a.jpg	assets/images/1668127165284.e1114b43-f8c9-43af-aca3-21e7932419bb.c4cfff66-c6e3-47df-8a5f-0b19a09b7e4e.06e3e86a-8796-470c-b423-c7c36d682b45.78c8227436ebc92a.jpg	image/jpg	3585763	2022-11-11 08:39:26.608069+08	f
155	4c6cf08d-38fa-42ab-8832-7330ea749dda2572001117544550608.jpg	1668127166966.3e311edf-4979-4943-b75c-df344495721f.4f5786cd-ee0a-46f6-aaee-f0f058f5568d.2090ee1d-b040-402b-8f2b-9d96387d4db5.2fe1a3507cff7a17.jpg	assets/images/1668127166966.3e311edf-4979-4943-b75c-df344495721f.4f5786cd-ee0a-46f6-aaee-f0f058f5568d.2090ee1d-b040-402b-8f2b-9d96387d4db5.2fe1a3507cff7a17.jpg	image/jpg	2845376	2022-11-11 08:39:28.016249+08	f
156	image_picker1773083804002386905.jpg	1668127170653.51394849-02b7-4e93-9863-5d7d07fcdcc9.471e8fef-823a-462c-9ba7-97960980c481.c0784b8e-1e97-4689-a9f8-0e3a2f265195.d7c23526a8031bd8.jpg	assets/images/1668127170653.51394849-02b7-4e93-9863-5d7d07fcdcc9.471e8fef-823a-462c-9ba7-97960980c481.c0784b8e-1e97-4689-a9f8-0e3a2f265195.d7c23526a8031bd8.jpg	image/jpg	930907	2022-11-11 08:39:31.236631+08	f
157	583becf4-d58e-4951-bab6-ad8eb9b203ca4058191101502521990.jpg	1668127160641.4e254757-6a63-4306-825d-5f7de6d1213b.a6391b88-4a30-4933-9909-2f58fd0b294b.ba6b3dcb-75f0-4fdc-bb77-14b8963586ee.ee79560a8ccd7909.jpg	assets/images/1668127160641.4e254757-6a63-4306-825d-5f7de6d1213b.a6391b88-4a30-4933-9909-2f58fd0b294b.ba6b3dcb-75f0-4fdc-bb77-14b8963586ee.ee79560a8ccd7909.jpg	image/jpg	3862183	2022-11-11 08:39:41.427319+08	f
158	image_picker7340283700806280121.jpg	1668127178396.dce1ad05-4866-4b06-a8e4-2bb1d28ce941.b19fb03a-b98d-4ba1-9234-3170da7b7246.b4a8b40d-25b5-4795-b6a9-f28e46ce4202.71ad6afd7867d6101.jpg	assets/images/1668127178396.dce1ad05-4866-4b06-a8e4-2bb1d28ce941.b19fb03a-b98d-4ba1-9234-3170da7b7246.b4a8b40d-25b5-4795-b6a9-f28e46ce4202.71ad6afd7867d6101.jpg	image/jpg	3436871	2022-11-11 08:39:51.181393+08	f
159	92046b62-15fa-45de-8fd1-bbcbf4c516cc5727282771272930342.jpg	1668127225104.39c948e6-4b59-40be-90e7-1e21d6156e75.a02cdc11-cc3b-45a4-a2fb-6f54beb32d7c.89f7ec9a-5fee-440e-bdb5-859af5a676a2.2c108ed66a8bfaff4.jpg	assets/images/1668127225104.39c948e6-4b59-40be-90e7-1e21d6156e75.a02cdc11-cc3b-45a4-a2fb-6f54beb32d7c.89f7ec9a-5fee-440e-bdb5-859af5a676a2.2c108ed66a8bfaff4.jpg	image/jpg	3043226	2022-11-11 08:40:27.032965+08	f
160	image_picker3652870908745402854.jpg	1668127281537.9c94e486-0d8e-450a-a99e-3e215ba5733e.e32081d5-e6dd-4222-8f19-7d85640d4432.9610fde3-39c6-4230-9a47-7764065522b8.1eb9207035c23dac.jpg	assets/images/1668127281537.9c94e486-0d8e-450a-a99e-3e215ba5733e.e32081d5-e6dd-4222-8f19-7d85640d4432.9610fde3-39c6-4230-9a47-7764065522b8.1eb9207035c23dac.jpg	image/jpg	930907	2022-11-11 08:41:22.198595+08	f
161	image_picker1094804565155282649.jpg	1668127300718.dc541271-ddb3-4908-9fe5-eb88ce12977b.9f242131-ed0b-4c1c-b7ad-4f795b226038.c1ff9865-704d-4c2e-8c38-07e6b1c6f752.71a28a9103311095dc.jpg	assets/images/1668127300718.dc541271-ddb3-4908-9fe5-eb88ce12977b.9f242131-ed0b-4c1c-b7ad-4f795b226038.c1ff9865-704d-4c2e-8c38-07e6b1c6f752.71a28a9103311095dc.jpg	image/jpg	3436871	2022-11-11 08:42:00.411591+08	f
162	image_picker5130802783335991336.jpg	1668127424647.18ccce49-2609-4b94-b123-a06c4f56d3bb.45b7bce0-9695-4cff-af24-26b145ff1014.57a59437-3165-4e74-b979-5b9da1f1a7c2.5254c67cf84c3edf.jpg	assets/images/1668127424647.18ccce49-2609-4b94-b123-a06c4f56d3bb.45b7bce0-9695-4cff-af24-26b145ff1014.57a59437-3165-4e74-b979-5b9da1f1a7c2.5254c67cf84c3edf.jpg	image/jpg	2460763	2022-11-11 08:43:45.537583+08	f
163	66b377a4-8347-462f-b1a2-8303b0ce2b1d8613344586903616400.jpg	1668127450869.7da499a9-2c9e-43a1-8694-14983b5016f0.5eb90de0-c017-4567-8963-849038727d57.458f60c7-7bbf-43fe-b603-23ca9a383a4f.6dae148a74d40101a.jpg	assets/images/1668127450869.7da499a9-2c9e-43a1-8694-14983b5016f0.5eb90de0-c017-4567-8963-849038727d57.458f60c7-7bbf-43fe-b603-23ca9a383a4f.6dae148a74d40101a.jpg	image/jpg	1785438	2022-11-11 08:44:14.170009+08	f
164	58f66ac9-0240-4360-a1b9-9b6815deba006900854965647369598.jpg	1668127449866.7870e2d4-051d-49eb-a4f9-a33d71387ca2.89e9bc58-c822-4313-9468-5c7ef8b360b2.9a150d12-8112-4e77-9445-ac49b020cf9b.92bfe402d77d367e.jpg	assets/images/1668127449866.7870e2d4-051d-49eb-a4f9-a33d71387ca2.89e9bc58-c822-4313-9468-5c7ef8b360b2.9a150d12-8112-4e77-9445-ac49b020cf9b.92bfe402d77d367e.jpg	image/jpg	3498526	2022-11-11 08:44:23.041732+08	f
165	image_picker1986625211020826236.jpg	1668127471955.79758e40-407b-4a65-985a-17aca4258ca5.fa1b7ac3-01e0-4b56-838e-77fe642fa304.25b25ab5-7caf-4d60-956d-b76086fe68a2.cca5a502c9deb6ba.jpg	assets/images/1668127471955.79758e40-407b-4a65-985a-17aca4258ca5.fa1b7ac3-01e0-4b56-838e-77fe642fa304.25b25ab5-7caf-4d60-956d-b76086fe68a2.cca5a502c9deb6ba.jpg	image/jpg	1028551	2022-11-11 08:44:42.135386+08	f
166	S7deebd03f40847769d7c8b2de8b0c420j.jpg_240x240q80.jpg	1668128335710.66e828e5-eac6-4663-98ea-22560bbe4cc7.0a803b5d-cf52-4182-a4c3-13f820715e91.2fe0d6f6-e2c3-4dd1-8386-80a85a241964.10c0e102ffd28a2f56.jpg	assets/images/1668128335710.66e828e5-eac6-4663-98ea-22560bbe4cc7.0a803b5d-cf52-4182-a4c3-13f820715e91.2fe0d6f6-e2c3-4dd1-8386-80a85a241964.10c0e102ffd28a2f56.jpg	image/jpg	8250	2022-11-11 08:58:55.904763+08	f
167	S7deebd03f40847769d7c8b2de8b0c420j.jpg_240x240q80.jpg	1668128831508.764b08e5-ecca-4cd8-962e-dbbfbe0ccb0e.85adaaf8-5a14-4636-a3a8-0a45eff1bcff.3edc7017-6590-47e6-9077-0c37a1a6979a.e4724458ab79ae27.jpg	assets/images/1668128831508.764b08e5-ecca-4cd8-962e-dbbfbe0ccb0e.85adaaf8-5a14-4636-a3a8-0a45eff1bcff.3edc7017-6590-47e6-9077-0c37a1a6979a.e4724458ab79ae27.jpg	image/jpg	8250	2022-11-11 09:07:11.516885+08	f
168	1610376355164.jpeg	1668222155441.d203ac74-c700-4b54-866f-94978513ff9c.54631dd1-8eeb-4f41-a468-a184f69b5181.03f4734b-4d0f-4f90-9d2c-b9be743fdfe8.b02211e3c63bde8f.jpg	assets/images/1668222155441.d203ac74-c700-4b54-866f-94978513ff9c.54631dd1-8eeb-4f41-a468-a184f69b5181.03f4734b-4d0f-4f90-9d2c-b9be743fdfe8.b02211e3c63bde8f.jpg	image/jpg	49274	2022-11-12 11:02:35.446647+08	f
169	1610376355164.jpeg	1668223844903.35344241-b2e1-4978-9684-53d3738f98e6.00276c31-87a5-4f64-8e1e-479bfc3f9cb8.e5c76a09-333b-412b-b756-8cfdafc8ea50.a1108fc58b6ff010e7.jpg	assets/images/1668223844903.35344241-b2e1-4978-9684-53d3738f98e6.00276c31-87a5-4f64-8e1e-479bfc3f9cb8.e5c76a09-333b-412b-b756-8cfdafc8ea50.a1108fc58b6ff010e7.jpg	image/jpg	49274	2022-11-12 11:30:44.920168+08	f
170	9VtNpc9a.jpg	9VtNpc9a.jpg	assets/images/9VtNpc9.jpg	image/jpg	1234	2022-10-08 15:30:40.589166+08	f
171	download.jpeg	1668308038572.470d3b75-b368-4b26-9271-07dfccbef4a9.ef26d0a8-6dc4-4680-8197-1f49585f7d4b.8c4e06ce-32bc-4f33-a570-7fa2cb5a847f.cd3eea17d58f9a210.jpg	assets/images/1668308038572.470d3b75-b368-4b26-9271-07dfccbef4a9.ef26d0a8-6dc4-4680-8197-1f49585f7d4b.8c4e06ce-32bc-4f33-a570-7fa2cb5a847f.cd3eea17d58f9a210.jpg	image/jpg	10762	2022-11-13 10:53:58.582236+08	f
172	download.jpeg	1668330597140.ae76e0d4-9e35-4447-b517-3ee05c6af950.83c25153-04a0-40b3-a2e3-a1fd5b19cc0e.3c45f6c0-6b5d-419a-b267-23c5c3525b65.46a4d210ec4b4fb22.jpg	assets/images/1668330597140.ae76e0d4-9e35-4447-b517-3ee05c6af950.83c25153-04a0-40b3-a2e3-a1fd5b19cc0e.3c45f6c0-6b5d-419a-b267-23c5c3525b65.46a4d210ec4b4fb22.jpg	image/jpg	10762	2022-11-13 17:09:57.150219+08	f
173	download.jpeg	1668330933361.ac9db61d-814b-462c-9e14-355f3eecaca1.7fdde68e-6144-4dd5-bacd-f8cd4c7344c6.622e35a4-7633-43c1-81e1-138191232ad0.3e8cb7ae755c174b.jpg	assets/images/1668330933361.ac9db61d-814b-462c-9e14-355f3eecaca1.7fdde68e-6144-4dd5-bacd-f8cd4c7344c6.622e35a4-7633-43c1-81e1-138191232ad0.3e8cb7ae755c174b.jpg	image/jpg	10762	2022-11-13 17:15:33.365244+08	f
174	download.jpeg	1668337402992.15ab86a6-885f-45f8-b082-3ca1b4a97ea3.6ce3b03a-8402-4d16-8605-46d453dddff6.51bd7207-90b8-4133-a371-089d624d3cf9.488e8610981fa9a33.jpg	assets/images/1668337402992.15ab86a6-885f-45f8-b082-3ca1b4a97ea3.6ce3b03a-8402-4d16-8605-46d453dddff6.51bd7207-90b8-4133-a371-089d624d3cf9.488e8610981fa9a33.jpg	image/jpg	10762	2022-11-13 19:03:23.004592+08	f
175	1610376355164.jpeg	1668337706480.10d788dc-a874-4f22-ab97-4b0d00408a13.55ee6bbf-2f68-46cc-b377-15b63512ac16.9a8314a7-d13f-4af2-a00c-70d4aa5761b5.f7fb53b21318d98e.jpg	assets/images/1668337706480.10d788dc-a874-4f22-ab97-4b0d00408a13.55ee6bbf-2f68-46cc-b377-15b63512ac16.9a8314a7-d13f-4af2-a00c-70d4aa5761b5.f7fb53b21318d98e.jpg	image/jpg	49274	2022-11-13 19:08:26.518883+08	f
176	download.jpeg	1668338077689.1cf7b16c-6c92-4610-b762-1954b6467f0e.8409a86e-79b7-41d0-bb57-7b7fabd17c2f.c3e37c2b-2482-45e4-a398-ee4666361c9e.efeaaf10f94c0d528.jpg	assets/images/1668338077689.1cf7b16c-6c92-4610-b762-1954b6467f0e.8409a86e-79b7-41d0-bb57-7b7fabd17c2f.c3e37c2b-2482-45e4-a398-ee4666361c9e.efeaaf10f94c0d528.jpg	image/jpg	10762	2022-11-13 19:14:37.698449+08	f
177	1610376355164.jpeg	1668338083710.2ca8ef83-582f-44c5-907a-f3309f5b7df2.830facf1-aabd-4377-93de-f478f4df04e4.a6d69b86-e006-4404-9b0d-9f5d22641054.54f2a9cb73ea5255.jpg	assets/images/1668338083710.2ca8ef83-582f-44c5-907a-f3309f5b7df2.830facf1-aabd-4377-93de-f478f4df04e4.a6d69b86-e006-4404-9b0d-9f5d22641054.54f2a9cb73ea5255.jpg	image/jpg	49274	2022-11-13 19:14:43.769116+08	f
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
9	e3045e0b-1766-48c1-ba82-407968e7de14	rpascual0812@gmail.com	Samdhana Admin	email04@gmail.com	Rafael Pascual	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-02 04:49:21.156761+08	true	f	22
10	6d6a7673-7d5a-4073-9631-61e7075aa806	rpascual0812@gmail.com	Samdhana Admin	cherie.cabrito@gmail.com	cherie cabrito	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-03 14:04:15.166278+08	true	f	23
11	14101084-7686-4956-baad-a4e4c76239af	rpascual0812@gmail.com	Samdhana Admin	cherie.cabrito@kwmultimedia.ph	cherie cabrito	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-03 14:06:24.207766+08	true	f	24
12	19c18a66-0230-4176-9b80-87e614e33e76	rpascual0812@gmail.com	Samdhana Admin	hermie.cabrito@kwmultimedia.ph	hermie cabrito	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-09 23:33:44.656693+08	true	f	25
13	c21a4047-99da-4619-897e-018b3762dcff	rpascual0812@gmail.com	Samdhana Admin	hermie.cabrito@gmail.com	hermie cabrito	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-11 06:53:19.563584+08	true	f	26
14	c71420af-1732-41de-b33a-9b2dae0b687f	rpascual0812@gmail.com	Samdhana Admin	bernadie@samdhana.org	Bem Jamora	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-11 08:29:57.401826+08	true	f	27
15	6c195e51-6bd4-4316-91bd-165f6d2f240b	rpascual0812@gmail.com	Samdhana Admin	wengquins@gmail.com	erwin quinones	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-11 08:39:33.871988+08	true	f	28
16	b20e17e6-7d5a-4e42-8411-1556bdf6d51c	rpascual0812@gmail.com	Samdhana Admin	joanjamisolamin@gmail.com	joan Jamisolamin 	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-11 08:39:50.200793+08	true	f	29
17	b455919c-bfdf-4438-862e-d6d8d47964ae	rpascual0812@gmail.com	Samdhana Admin	lumactodaimsylph@gmail.com	cane lumactod	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-11 08:44:20.823539+08	true	f	30
18	6faf3ef9-5725-4498-a486-fc45b2d0dd9c	rpascual0812@gmail.com	Samdhana Admin	alfred@samdhana.org	alfred santos	\N	\N	Get Started with Samdhana Community Market	<h1>Welcome to Samdhana Community Market</h1>	2022-11-11 08:44:42.274849+08	true	f	31
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
33	products	27	"{\\"user_pk\\":20,\\"uuid\\":\\"c5fc1d1e-0ad3-4f6e-a969-7afb92ba89cc\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Watermelon\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-02 04:09:58.709174+08	f
34	products	28	"{\\"user_pk\\":24,\\"uuid\\":\\"00382d4b-942d-41c1-8178-ea3a86e807eb\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"champoy\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	24	2022-11-03 14:14:55.847075+08	f
35	sellers	19	"{\\"user_pk\\":24,\\"uuid\\":\\"2ccef005-fcdd-44df-861b-15b459a922a4\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9176590236\\"}"	24	2022-11-03 14:16:56.431615+08	f
36	products	29	"{\\"user_pk\\":24,\\"uuid\\":\\"3293a230-e131-4a18-b8ae-b2815283049d\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"picnic\\",\\"quantity\\":\\"1\\",\\"measurement\\":\\"4\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	24	2022-11-03 15:20:11.631541+08	f
37	products	30	"{\\"user_pk\\":24,\\"uuid\\":\\"aa80bfc1-ea5c-49e2-9570-6188aa4ca4a8\\",\\"type\\":\\"product\\",\\"name\\":\\"Carrots\\",\\"measurement\\":\\"1\\"}"	24	2022-11-05 07:29:09.243428+08	f
38	products	31	"{\\"user_pk\\":24,\\"uuid\\":\\"3773ff26-93bd-49e6-ac51-b707a13f8bd3\\",\\"type\\":\\"product\\",\\"name\\":\\"Chocolate\\",\\"measurement\\":\\"1\\"}"	24	2022-11-05 07:35:13.631619+08	f
39	products	32	"{\\"user_pk\\":24,\\"uuid\\":\\"2dd7e0ce-aeec-4c32-8f76-24f894abedac\\",\\"type\\":\\"product\\",\\"name\\":\\"basket\\",\\"measurement\\":\\"1\\"}"	24	2022-11-05 07:40:15.672855+08	f
40	products	33	"{\\"user_pk\\":24,\\"uuid\\":\\"dd5b6339-8359-4b4d-92e8-3a54a2f4237b\\",\\"type\\":\\"product\\",\\"name\\":\\"onions\\",\\"measurement\\":\\"1\\"}"	24	2022-11-05 07:41:44.354866+08	f
41	products	34	"{\\"user_pk\\":24,\\"uuid\\":\\"76d994c4-12f8-4b28-867e-87542daca9e7\\",\\"type\\":\\"product\\",\\"name\\":\\"raddish\\",\\"measurement\\":\\"1\\"}"	24	2022-11-05 07:42:22.599678+08	f
42	products	35	"{\\"user_pk\\":24,\\"uuid\\":\\"e84f2d00-9d67-48b0-b7c1-e1ef47e1f16b\\",\\"type\\":\\"product\\",\\"name\\":\\"Upo\\",\\"quantity\\":\\"200\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"100\\"}"	24	2022-11-10 01:25:28.660887+08	f
43	products	35	"{\\"name\\":\\"Upo\\",\\"measurement\\":\\"1\\"}"	24	2022-11-10 01:26:02.444216+08	f
44	products	35	"{\\"name\\":\\"Upo\\",\\"measurement\\":\\"1\\"}"	24	2022-11-10 01:26:10.523809+08	f
45	products	36	"{\\"user_pk\\":24,\\"uuid\\":\\"0ab47994-63b9-4c90-a970-60252e84eea9\\",\\"type\\":\\"product\\",\\"name\\":\\"upo\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"130\\"}"	24	2022-11-10 01:29:45.392068+08	f
46	products	37	"{\\"user_pk\\":24,\\"uuid\\":\\"a9accf6a-d701-48da-98a5-19f3316c207d\\",\\"type\\":\\"product\\",\\"name\\":\\"upo\\",\\"quantity\\":\\"5000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"150\\"}"	24	2022-11-10 01:31:19.2527+08	f
47	products	38	"{\\"user_pk\\":20,\\"uuid\\":\\"c7e685de-ef5e-4e08-b3b5-5527976f541c\\",\\"type\\":\\"product\\",\\"name\\":\\"Product 10\\",\\"quantity\\":\\"100000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"10\\"}"	20	2022-11-10 05:06:28.362602+08	f
48	products	39	"{\\"user_pk\\":20,\\"uuid\\":\\"5cf2e155-d262-450c-a34b-fee4c149a263\\",\\"type\\":\\"future_crop\\",\\"name\\":\\"Dragon Fruit\\",\\"quantity\\":\\"100000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"100\\"}"	20	2022-11-10 06:01:25.847456+08	f
49	products	37	"{\\"name\\":\\"upo\\",\\"measurement\\":\\"1\\"}"	24	2022-11-10 11:56:13.357714+08	f
50	products	37	"{\\"name\\":\\"upo\\",\\"measurement\\":\\"1\\"}"	24	2022-11-10 12:03:40.000309+08	f
51	products	37	"{\\"name\\":\\"upo\\",\\"measurement\\":\\"1\\"}"	24	2022-11-10 12:06:22.394021+08	f
52	products	40	"{\\"user_pk\\":24,\\"uuid\\":\\"6aae1065-293b-4753-82f4-086b60aea47e\\",\\"type\\":\\"future_crop\\",\\"name\\":\\"Culls\\",\\"quantity\\":\\"300\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"280\\"}"	24	2022-11-10 12:19:55.221033+08	f
53	products	40	"{\\"name\\":\\"Culls\\",\\"measurement\\":\\"1\\"}"	24	2022-11-10 12:20:03.42144+08	f
54	products	40	"{\\"name\\":\\"Culls\\",\\"measurement\\":\\"1\\"}"	24	2022-11-10 12:26:54.839488+08	f
55	orders	25	"{\\"uuid\\":\\"01c991bc-8587-4ad7-9c0c-049211b2d12d\\",\\"user_pk\\":20,\\"product_pk\\":\\"30\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	20	2022-11-11 00:14:18.764992+08	f
56	orders	26	"{\\"uuid\\":\\"791157e5-0777-4792-b77a-69a656e639e0\\",\\"user_pk\\":24,\\"product_pk\\":\\"32\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	24	2022-11-11 04:29:38.121639+08	f
57	orders	27	"{\\"uuid\\":\\"a148bac5-5b34-47fd-b20c-b4fc1a1d5060\\",\\"user_pk\\":24,\\"product_pk\\":\\"32\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	24	2022-11-11 04:30:06.994325+08	f
58	products	41	"{\\"user_pk\\":24,\\"uuid\\":\\"7e4fa7d1-1b66-4857-9f99-68a8bfbc3815\\",\\"type\\":\\"product\\",\\"name\\":\\"Native Chicken\\",\\"quantity\\":\\"600\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"180\\"}"	24	2022-11-11 04:49:03.079098+08	f
59	orders	28	"{\\"uuid\\":\\"81db3139-674c-4c74-8a67-fcbda04383c8\\",\\"user_pk\\":20,\\"product_pk\\":\\"34\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	20	2022-11-11 05:14:42.718392+08	f
60	products	32	"{\\"name\\":\\"basket\\",\\"measurement\\":\\"1\\"}"	24	2022-11-11 05:17:52.881878+08	f
61	orders	29	"{\\"uuid\\":\\"b1e840aa-04bf-479f-974d-c5e100f670ed\\",\\"user_pk\\":24,\\"product_pk\\":\\"41\\",\\"quantity\\":\\"600.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"180.00\\",\\"status\\":\\"Ordered\\"}"	24	2022-11-11 05:21:15.881189+08	f
62	products	33	"{\\"name\\":\\"onions\\",\\"measurement\\":\\"1\\"}"	24	2022-11-11 05:44:13.169055+08	f
63	products	40	"{\\"name\\":\\"Culls\\",\\"measurement\\":\\"1\\"}"	24	2022-11-11 05:44:36.645718+08	f
64	products	35	"{\\"name\\":\\"Upo\\",\\"measurement\\":\\"1\\"}"	24	2022-11-11 05:45:33.954714+08	f
65	orders	31	"{\\"uuid\\":\\"c184e1f2-e7fe-499b-a2e2-99f6911302d4\\",\\"user_pk\\":25,\\"product_pk\\":\\"30\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	25	2022-11-11 05:47:27.806184+08	f
66	orders	32	"{\\"uuid\\":\\"d4843409-3c16-45d0-9600-7a91ebd7628c\\",\\"user_pk\\":25,\\"product_pk\\":\\"30\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	25	2022-11-11 05:47:46.027995+08	f
67	orders	33	"{\\"uuid\\":\\"09a20ad6-3a8e-4a6c-8a8e-94a0a9306455\\",\\"user_pk\\":25,\\"product_pk\\":\\"33\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	25	2022-11-11 05:50:48.999908+08	f
68	orders	34	"{\\"uuid\\":\\"252d5458-5b8b-4329-aa05-8eac3670c479\\",\\"user_pk\\":25,\\"product_pk\\":\\"33\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	25	2022-11-11 05:50:58.353397+08	f
69	orders	35	"{\\"uuid\\":\\"6a8ddb57-28e9-4f8c-82b7-3c745a81976c\\",\\"user_pk\\":25,\\"product_pk\\":\\"41\\",\\"quantity\\":\\"600.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"180.00\\",\\"status\\":\\"Ordered\\"}"	25	2022-11-11 06:19:55.145343+08	f
70	orders	36	"{\\"uuid\\":\\"7b4a49c8-55b9-4093-920d-8a465d72839b\\",\\"user_pk\\":25,\\"product_pk\\":\\"41\\",\\"quantity\\":\\"600.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"180.00\\",\\"status\\":\\"Ordered\\"}"	25	2022-11-11 06:20:10.258791+08	f
71	orders	37	"{\\"uuid\\":\\"5de244ed-5893-4ab3-98ff-c0e9c3ec2385\\",\\"user_pk\\":25,\\"product_pk\\":\\"41\\",\\"quantity\\":\\"600.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"180.00\\",\\"status\\":\\"Added to Cart\\"}"	25	2022-11-11 06:20:20.508621+08	f
72	sellers	20	"{\\"user_pk\\":25,\\"uuid\\":\\"8c01740a-8305-4ca0-82b0-1d67b85f0f68\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9178569686\\"}"	25	2022-11-11 06:31:54.600089+08	f
73	products	48	"{\\"user_pk\\":25,\\"uuid\\":\\"aa309f9b-19eb-447f-8500-d9dae9be270b\\",\\"type\\":\\"product\\",\\"name\\":\\"grapes\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"200\\"}"	25	2022-11-11 06:33:41.887837+08	f
74	products	49	"{\\"user_pk\\":25,\\"uuid\\":\\"cfd954bc-386d-4874-91c4-98e2ddb4f695\\",\\"type\\":\\"future_crop\\",\\"name\\":\\"grapes\\",\\"quantity\\":\\"500\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"200\\"}"	25	2022-11-11 06:34:32.800928+08	f
75	products	51	"{\\"user_pk\\":20,\\"uuid\\":\\"ace64238-e814-45d9-9591-744e6d802406\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Apple\\",\\"quantity\\":\\"8000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-11 06:42:44.969382+08	f
76	products	52	"{\\"user_pk\\":26,\\"uuid\\":\\"1b467d4a-776c-4091-8e80-d7228c275444\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"grapes\\",\\"quantity\\":\\"100\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	26	2022-11-11 06:53:59.214323+08	f
77	sellers	21	"{\\"user_pk\\":26,\\"uuid\\":\\"4242523f-5c93-4409-bbc2-847ba1c21f39\\",\\"type\\":\\"seller register\\",\\"mobile_number\\":\\"9158529686\\"}"	26	2022-11-11 06:56:22.471408+08	f
78	products	53	"{\\"user_pk\\":26,\\"uuid\\":\\"49e2435d-60f0-4e49-8ac5-0c13c5729bdf\\",\\"type\\":\\"future_crop\\",\\"name\\":\\"grapes\\",\\"quantity\\":\\"200\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"10\\"}"	26	2022-11-11 06:57:09.787609+08	f
79	products	53	"{\\"name\\":\\"grapes\\",\\"measurement\\":\\"1\\"}"	26	2022-11-11 06:57:17.764151+08	f
80	products	54	"{\\"user_pk\\":26,\\"uuid\\":\\"39775a32-6251-46b5-9cd4-59c94f79a637\\",\\"type\\":\\"product\\",\\"name\\":\\"grapes\\",\\"quantity\\":\\"300\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"20\\"}"	26	2022-11-11 06:58:18.775676+08	f
81	products	55	"{\\"user_pk\\":24,\\"uuid\\":\\"614e8611-00cd-45b5-8066-674b7aa3cc97\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"chicken\\",\\"quantity\\":\\"15000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	24	2022-11-11 07:42:45.04086+08	f
82	products	41	"{\\"name\\":\\"Native Chicken\\",\\"measurement\\":\\"1\\"}"	24	2022-11-11 07:56:52.164783+08	f
83	products	37	"{\\"name\\":\\"upo\\",\\"measurement\\":\\"1\\"}"	24	2022-11-11 07:57:05.884936+08	f
84	orders	41	"{\\"uuid\\":\\"a3d779fc-68c7-483d-9bec-1223ec400fca\\",\\"user_pk\\":24,\\"product_pk\\":\\"54\\",\\"quantity\\":\\"300.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"20.00\\",\\"status\\":\\"Ordered\\"}"	24	2022-11-11 08:00:40.387601+08	f
85	orders	42	"{\\"uuid\\":\\"18b8d060-6d3b-4ae4-86bf-aef68d1fa03a\\",\\"user_pk\\":24,\\"product_pk\\":\\"54\\",\\"quantity\\":\\"300.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"20.00\\",\\"status\\":\\"Added to Cart\\"}"	24	2022-11-11 08:01:10.379768+08	f
86	orders	43	"{\\"uuid\\":\\"3bb06154-9ace-4e56-bf26-7f96b1f5d93e\\",\\"user_pk\\":24,\\"product_pk\\":\\"37\\",\\"quantity\\":\\"5000.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"150.00\\",\\"status\\":\\"Added to Cart\\"}"	24	2022-11-11 08:01:40.682605+08	f
87	orders	44	"{\\"uuid\\":\\"a2ee3693-ec89-497f-be9c-8bf627023372\\",\\"user_pk\\":29,\\"product_pk\\":\\"32\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	29	2022-11-11 08:43:32.148096+08	f
88	orders	45	"{\\"uuid\\":\\"32cb92d7-3e76-4e89-86c9-ee56f2528485\\",\\"user_pk\\":29,\\"product_pk\\":\\"32\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	29	2022-11-11 08:44:55.733261+08	f
89	orders	46	"{\\"uuid\\":\\"f8cd61ab-30d7-4762-a67a-fb875ff9147a\\",\\"user_pk\\":30,\\"product_pk\\":\\"53\\",\\"quantity\\":\\"200.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"10.00\\",\\"status\\":\\"Added to Cart\\"}"	30	2022-11-11 08:45:09.356947+08	f
90	orders	47	"{\\"uuid\\":\\"0ffe734c-1dec-4a21-98a6-499e61e26fca\\",\\"user_pk\\":30,\\"product_pk\\":\\"40\\",\\"quantity\\":\\"300.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"280.00\\",\\"status\\":\\"Added to Cart\\"}"	30	2022-11-11 08:45:54.133642+08	f
91	orders	48	"{\\"uuid\\":\\"78cf4ef3-7f65-4d9e-a0b0-768f214bab59\\",\\"user_pk\\":26,\\"product_pk\\":\\"34\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	26	2022-11-11 08:51:26.241043+08	f
92	orders	49	"{\\"uuid\\":\\"d8a271f4-2427-436a-a820-5212f37ae712\\",\\"user_pk\\":28,\\"product_pk\\":\\"34\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	28	2022-11-11 08:51:37.884882+08	f
93	orders	50	"{\\"uuid\\":\\"8f8a41da-1c52-4860-ba98-dd5c2a9e8998\\",\\"user_pk\\":30,\\"product_pk\\":\\"34\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	30	2022-11-11 08:51:44.056444+08	f
94	orders	51	"{\\"uuid\\":\\"295619b2-6556-46fa-a9a6-d4cdb167d5f8\\",\\"user_pk\\":26,\\"product_pk\\":\\"34\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	26	2022-11-11 08:54:54.182195+08	f
95	orders	52	"{\\"uuid\\":\\"c1e48fa4-ce00-4fcf-b40c-50b37979f39e\\",\\"user_pk\\":28,\\"product_pk\\":\\"34\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	28	2022-11-11 08:55:12.47976+08	f
96	orders	53	"{\\"uuid\\":\\"c2a0523b-b8e8-4ead-b10b-239eaddb4dae\\",\\"user_pk\\":28,\\"product_pk\\":\\"30\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	28	2022-11-11 08:56:48.622977+08	f
97	orders	54	"{\\"uuid\\":\\"99aec7f7-9084-41ea-904c-f044743c9588\\",\\"user_pk\\":30,\\"product_pk\\":\\"34\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	30	2022-11-11 08:57:12.065424+08	f
98	products	56	"{\\"user_pk\\":26,\\"uuid\\":\\"f466088a-c959-4729-9033-9693ac1b52be\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"chicken\\",\\"quantity\\":\\"100\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	26	2022-11-11 08:58:58.230304+08	f
99	products	57	"{\\"user_pk\\":26,\\"uuid\\":\\"b1794276-fbaa-4f6d-b3dc-fb0871798b5d\\",\\"type\\":\\"future_crop\\",\\"name\\":\\"chicken\\",\\"quantity\\":\\"5000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"180\\"}"	26	2022-11-11 09:07:14.14926+08	f
100	products	57	"{\\"name\\":\\"chicken\\",\\"measurement\\":\\"1\\"}"	26	2022-11-11 09:07:54.037905+08	f
101	orders	56	"{\\"uuid\\":\\"5cc93525-507c-4c29-aa25-4c96392519e0\\",\\"user_pk\\":24,\\"product_pk\\":\\"30\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	24	2022-11-11 13:52:19.576753+08	f
102	orders	57	"{\\"uuid\\":\\"5e0067c4-53a4-4b04-ba01-7840414476cd\\",\\"user_pk\\":24,\\"product_pk\\":\\"33\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	24	2022-11-11 13:52:25.4835+08	f
103	orders	58	"{\\"uuid\\":\\"6f1605f8-db63-4b80-a688-afa6ed852447\\",\\"user_pk\\":24,\\"product_pk\\":\\"32\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	24	2022-11-11 13:52:31.157727+08	f
104	orders	59	"{\\"uuid\\":\\"2691d82b-2a90-49a9-9893-29e770fff654\\",\\"user_pk\\":24,\\"product_pk\\":\\"32\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Ordered\\"}"	24	2022-11-11 13:52:37.815244+08	f
105	products	37	"{\\"name\\":\\"upo\\",\\"measurement\\":\\"1\\"}"	24	2022-11-11 14:15:39.988165+08	f
106	products	40	"{\\"name\\":\\"Culls\\",\\"measurement\\":\\"1\\"}"	24	2022-11-11 14:15:51.458184+08	f
107	products	40	"{\\"name\\":\\"Culls\\",\\"measurement\\":\\"1\\"}"	24	2022-11-11 14:16:00.940394+08	f
108	orders	60	"{\\"uuid\\":\\"8f872b42-b4de-4fe5-8ca3-4a63c714373e\\",\\"user_pk\\":24,\\"product_pk\\":\\"32\\",\\"quantity\\":\\"0.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"0.00\\",\\"status\\":\\"Added to Cart\\"}"	24	2022-11-11 14:42:26.24024+08	f
109	orders	64	"{\\"uuid\\":\\"ba482514-037a-4c62-9d77-7212b4a1d726\\",\\"user_pk\\":24,\\"product_pk\\":\\"53\\",\\"quantity\\":\\"200.00\\",\\"measurement_pk\\":\\"1\\",\\"price\\":\\"10.00\\",\\"status\\":\\"Added to Cart\\"}"	24	2022-11-11 14:48:47.466282+08	f
110	products	39	"{\\"name\\":\\"Dragon Fruit\\",\\"measurement\\":\\"1\\"}"	20	2022-11-11 19:00:51.570378+08	f
111	orders	72	"{\\"uuid\\":\\"032e7844-8ffb-4b93-801c-7127bdbd8735\\",\\"user_pk\\":20,\\"product_pk\\":\\"10\\",\\"quantity\\":\\"200.00\\",\\"measurement_pk\\":\\"2\\",\\"price\\":\\"1.50\\",\\"status\\":\\"Added to Cart\\"}"	20	2022-11-12 09:13:43.326039+08	f
112	products	58	"{\\"user_pk\\":20,\\"uuid\\":\\"15f97f38-e78a-4903-8963-003d23b84d6d\\",\\"type\\":\\"product\\",\\"name\\":\\"Test 1\\",\\"quantity\\":\\"100000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"100\\"}"	20	2022-11-12 11:02:40.046588+08	f
113	products	59	"{\\"user_pk\\":20,\\"uuid\\":\\"31500160-8889-4c59-b396-fc3641234d80\\",\\"type\\":\\"product\\",\\"name\\":\\"Te 2\\",\\"quantity\\":\\"20000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"10\\"}"	20	2022-11-12 11:34:59.438525+08	f
114	products	60	"{\\"user_pk\\":20,\\"uuid\\":\\"deb76cde-4065-4070-8416-74de4cb1ae42\\",\\"type\\":\\"product\\",\\"name\\":\\"Test 21\\",\\"quantity\\":\\"100000\\",\\"measurement\\":\\"1\\",\\"price_from\\":\\"12\\"}"	20	2022-11-13 10:54:01.948766+08	f
115	orders	73	"{\\"uuid\\":\\"93bea1b7-7034-48a0-a8a4-f965318b5f9d\\",\\"user_pk\\":20,\\"product_pk\\":\\"27\\",\\"quantity\\":\\"1000.00\\",\\"measurement_pk\\":\\"2\\",\\"price\\":\\"1000.00\\",\\"status\\":\\"Ordered\\"}"	20	2022-11-13 11:21:44.67579+08	f
116	products	63	"{\\"user_pk\\":20,\\"uuid\\":\\"bedf48bf-851b-4fbb-b9ff-0dc4771ededd\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Dragon Fruit\\",\\"quantity\\":\\"1000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-13 17:16:10.095271+08	f
117	products	64	"{\\"user_pk\\":20,\\"uuid\\":\\"3a42309e-e7e4-4471-b7fa-958f9e9a8a31\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Looking for 1\\",\\"quantity\\":\\"10000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-13 19:03:26.193777+08	f
118	products	65	"{\\"user_pk\\":20,\\"uuid\\":\\"4026f2c2-a949-427f-ad3e-7105994b1c38\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"LookingFo 2\\",\\"quantity\\":\\"5000\\",\\"measurement\\":\\"2\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-13 19:08:29.160972+08	f
119	products	66	"{\\"user_pk\\":20,\\"uuid\\":\\"4233d57b-9dca-4aa7-877d-66c875e0efec\\",\\"type\\":\\"looking_for\\",\\"name\\":\\"Lookking For 3\\",\\"quantity\\":\\"13420\\",\\"measurement\\":\\"3\\",\\"price_from\\":\\"1000\\",\\"price_to\\":\\"5000\\",\\"currency\\":\\"php\\"}"	20	2022-11-13 19:14:46.471113+08	f
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
3	0fc40ceb-1e8a-49d8-a20c-812bbasdfasdf119	19	10	300.00	2	6.00	2022-10-25 13:05:21.830443+08	2	f	4
5	0fc40ceb-1e8a-49d8-a20c-812bbasdfasdf1191	20	22	300.00	2	6.00	2022-10-25 13:05:21.830443+08	6	f	20
6	692cb7d1-2713-497d-b36f-9dcf4d745c31	20	26	1000.00	2	0.00	2022-11-01 16:58:57.449599+08	6	f	20
8	86cd04bd-6829-45b2-b43e-877ef66cc68d	20	27	1000.00	2	0.00	2022-11-02 04:09:58.709174+08	6	f	20
9	27462619-4fe2-4962-b2a4-8b0d216e7b93	24	28	1000.00	1	0.00	2022-11-03 14:14:55.847075+08	6	f	24
12	fb16a25b-bb50-47f7-8682-6b91886ce37b	24	29	1.00	4	0.00	2022-11-03 15:20:11.631541+08	6	f	24
2	0fc40ceb-1e8a-49d8-a20c-812bbf7f4119	4	7	600.00	2	4.50	2022-10-25 13:05:21.830443+08	2	f	19
26	791157e5-0777-4792-b77a-69a656e639e0	24	32	0.00	1	0.00	2022-11-11 04:29:38.121639+08	7	f	19
25	01c991bc-8587-4ad7-9c0c-049211b2d12d	20	30	0.00	1	0.00	2022-11-11 00:14:18.764992+08	3	f	19
27	a148bac5-5b34-47fd-b20c-b4fc1a1d5060	24	32	0.00	1	0.00	2022-11-11 04:30:06.994325+08	3	f	19
54	99aec7f7-9084-41ea-904c-f044743c9588	30	34	0.00	1	0.00	2022-11-11 08:57:12.065424+08	2	f	19
55	c0d67385-4d39-47b9-a715-3d388c7635e6	26	56	100.00	2	0.00	2022-11-11 08:58:58.230304+08	6	f	26
31	c184e1f2-e7fe-499b-a2e2-99f6911302d4	25	30	0.00	1	0.00	2022-11-11 05:47:27.806184+08	3	f	19
34	252d5458-5b8b-4329-aa05-8eac3670c479	25	33	0.00	1	0.00	2022-11-11 05:50:58.353397+08	7	f	19
33	09a20ad6-3a8e-4a6c-8a8e-94a0a9306455	25	33	0.00	1	0.00	2022-11-11 05:50:48.999908+08	3	f	19
35	6a8ddb57-28e9-4f8c-82b7-3c745a81976c	25	41	600.00	1	180.00	2022-11-11 06:19:55.145343+08	3	f	19
36	7b4a49c8-55b9-4093-920d-8a465d72839b	25	41	600.00	1	180.00	2022-11-11 06:20:10.258791+08	7	f	19
32	d4843409-3c16-45d0-9600-7a91ebd7628c	25	30	0.00	1	0.00	2022-11-11 05:47:46.027995+08	2	f	19
37	5de244ed-5893-4ab3-98ff-c0e9c3ec2385	25	41	600.00	1	180.00	2022-11-11 06:20:20.508621+08	2	f	19
38	1280f43d-fcff-4552-831c-6d0b76ad1975	20	51	8000.00	2	0.00	2022-11-11 06:42:44.969382+08	6	f	20
39	8b3cc34e-94b7-463d-aebe-34a69dc628e3	26	52	100.00	2	0.00	2022-11-11 06:53:59.214323+08	6	f	26
40	804a39f9-c5f5-4820-91d9-beda3590a669	24	55	15000.00	2	0.00	2022-11-11 07:42:45.04086+08	6	f	24
45	32cb92d7-3e76-4e89-86c9-ee56f2528485	29	32	0.00	1	0.00	2022-11-11 08:44:55.733261+08	2	f	19
50	8f8a41da-1c52-4860-ba98-dd5c2a9e8998	30	34	0.00	1	0.00	2022-11-11 08:51:44.056444+08	2	f	19
48	78cf4ef3-7f65-4d9e-a0b0-768f214bab59	26	34	0.00	1	0.00	2022-11-11 08:51:26.241043+08	7	f	19
49	d8a271f4-2427-436a-a820-5212f37ae712	28	34	0.00	1	0.00	2022-11-11 08:51:37.884882+08	7	f	19
46	f8cd61ab-30d7-4762-a67a-fb875ff9147a	30	53	200.00	1	10.00	2022-11-11 08:45:09.356947+08	2	f	21
51	295619b2-6556-46fa-a9a6-d4cdb167d5f8	26	34	0.00	1	0.00	2022-11-11 08:54:54.182195+08	2	f	19
44	a2ee3693-ec89-497f-be9c-8bf627023372	29	32	0.00	1	0.00	2022-11-11 08:43:32.148096+08	2	f	19
47	0ffe734c-1dec-4a21-98a6-499e61e26fca	30	40	300.00	1	280.00	2022-11-11 08:45:54.133642+08	2	f	19
52	c1e48fa4-ce00-4fcf-b40c-50b37979f39e	28	34	0.00	1	0.00	2022-11-11 08:55:12.47976+08	2	f	19
53	c2a0523b-b8e8-4ead-b10b-239eaddb4dae	28	30	0.00	1	0.00	2022-11-11 08:56:48.622977+08	2	f	19
29	b1e840aa-04bf-479f-974d-c5e100f670ed	24	41	600.00	1	180.00	2022-11-11 05:21:15.881189+08	7	f	19
43	3bb06154-9ace-4e56-bf26-7f96b1f5d93e	24	37	5000.00	1	150.00	2022-11-11 08:01:40.682605+08	7	f	19
41	a3d779fc-68c7-483d-9bec-1223ec400fca	24	54	300.00	1	20.00	2022-11-11 08:00:40.387601+08	7	f	21
59	2691d82b-2a90-49a9-9893-29e770fff654	24	32	0.00	1	0.00	2022-11-11 13:52:37.815244+08	7	f	19
42	18b8d060-6d3b-4ae4-86bf-aef68d1fa03a	24	54	300.00	1	20.00	2022-11-11 08:01:10.379768+08	3	f	21
57	5e0067c4-53a4-4b04-ba01-7840414476cd	24	33	0.00	1	0.00	2022-11-11 13:52:25.4835+08	2	f	19
58	6f1605f8-db63-4b80-a688-afa6ed852447	24	32	0.00	1	0.00	2022-11-11 13:52:31.157727+08	2	f	19
60	8f872b42-b4de-4fe5-8ca3-4a63c714373e	24	32	0.00	1	0.00	2022-11-11 14:42:26.24024+08	1	f	19
56	5cc93525-507c-4c29-aa25-4c96392519e0	24	30	0.00	1	0.00	2022-11-11 13:52:19.576753+08	1	f	19
64	ba482514-037a-4c62-9d77-7212b4a1d726	24	53	200.00	1	10.00	2022-11-11 14:48:47.466282+08	1	f	21
72	032e7844-8ffb-4b93-801c-7127bdbd8735	20	10	200.00	2	1.50	2022-11-12 09:13:43.326039+08	1	f	4
73	93bea1b7-7034-48a0-a8a4-f965318b5f9d	20	27	2000.00	2	2000.00	2022-11-13 11:21:44.67579+08	2	f	20
74	b07956ed-7050-4fbd-9eab-289453ee25bc	20	63	1000.00	2	0.00	2022-11-13 17:16:10.095271+08	6	f	20
77	e3dfd7cb-6d6d-43a1-840f-c8310c568e85	20	66	13420.00	3	0.00	2022-11-13 19:14:46.471113+08	3	f	20
28	81db3139-674c-4c74-8a67-fcbda04383c8	20	34	0.00	1	0.00	2022-11-11 05:14:42.718392+08	7	f	19
76	1bb996e9-6906-48de-8006-889785d489a2	20	65	5000.00	2	0.00	2022-11-13 19:08:29.160972+08	8	f	20
75	57079c95-6c9b-4904-9d4b-20c479697f8c	20	64	10000.00	2	0.00	2022-11-13 19:03:26.193777+08	7	f	20
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
18	19	slide	76	2022-10-31 06:15:12.009441+08	16	f
19	19	slide	77	2022-10-31 12:21:36.523741+08	17	f
20	20	slide	87	2022-11-01 12:49:35.383889+08	22	f
22	20	slide	88	2022-11-01 12:58:15.188916+08	24	f
23	20	slide	89	2022-11-01 13:46:05.480508+08	25	t
24	20	slide	90	2022-11-01 16:58:57.449599+08	26	t
25	20	slide	97	2022-11-02 04:09:58.709174+08	27	t
26	24	slide	110	2022-11-03 14:14:55.847075+08	28	t
27	24	slide	114	2022-11-03 15:20:11.631541+08	29	t
28	24	slide	116	2022-11-03 15:20:11.631541+08	29	f
29	24	slide	117	2022-11-05 07:29:09.243428+08	30	t
30	24	slide	118	2022-11-05 07:35:13.631619+08	31	t
33	24	slide	121	2022-11-05 07:42:22.599678+08	34	t
38	24	slide	126	2022-11-10 01:29:45.392068+08	36	t
40	20	slide	128	2022-11-10 05:06:28.362602+08	38	t
49	24	slide	119	2022-11-11 05:17:52.881878+08	32	t
50	24	slide	120	2022-11-11 05:44:13.169055+08	33	t
52	24	slide	124	2022-11-11 05:45:33.954714+08	35	t
58	25	slide	137	2022-11-11 06:33:41.887837+08	48	t
59	25	slide	138	2022-11-11 06:34:32.800928+08	49	t
61	20	slide	139	2022-11-11 06:42:44.969382+08	51	t
62	26	slide	142	2022-11-11 06:53:59.214323+08	52	t
64	26	slide	145	2022-11-11 06:57:17.764151+08	53	t
65	26	slide	146	2022-11-11 06:58:18.775676+08	54	t
66	24	slide	147	2022-11-11 07:42:45.04086+08	55	t
67	24	slide	132	2022-11-11 07:56:52.164783+08	41	t
69	26	slide	166	2022-11-11 08:58:58.230304+08	56	t
71	26	slide	167	2022-11-11 09:07:54.037905+08	57	t
72	24	slide	127	2022-11-11 14:15:39.988165+08	37	t
74	24	slide	131	2022-11-11 14:16:00.940394+08	40	t
75	20	slide	130	2022-11-11 19:00:51.570378+08	39	t
76	20	slide	168	2022-11-12 11:02:40.046588+08	58	t
77	20	slide	169	2022-11-12 11:34:59.438525+08	59	t
78	20	slide	171	2022-11-13 10:54:01.948766+08	60	t
79	20	slide	173	2022-11-13 17:16:10.095271+08	63	t
80	20	slide	174	2022-11-13 19:03:26.193777+08	64	t
81	20	slide	175	2022-11-13 19:08:29.160972+08	65	t
82	20	slide	176	2022-11-13 19:14:46.471113+08	66	t
83	20	slide	177	2022-11-13 19:14:46.471113+08	66	f
\.


--
-- Data for Name: product_ratings; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.product_ratings (pk, user_pk, product_pk, rating, date_created, message, anonymous) FROM stdin;
2	4	10	5.00	2022-10-12 04:56:27.942699+08	\N	f
1	19	10	3.00	2022-10-12 04:19:59.331822+08	aaaaa	t
3	20	8	4.00	2022-11-01 17:35:49.785516+08	Test	f
4	20	25	5.00	2022-11-01 23:57:47.061049+08		f
5	24	31	5.00	2022-11-05 09:01:40.497589+08	gold stars	t
6	20	34	3.00	2022-11-11 05:15:15.883454+08	Test rating for raddish	f
7	24	53	5.00	2022-11-11 09:09:47.948592+08	stars	f
\.


--
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.products (pk, uuid, user_pk, type, name, date_created, archived, measurement_pk, country_pk, description, quantity, price_from, price_to, category_pk, date_available) FROM stdin;
30	b5d292f8-aaa9-4ef5-ba3f-71b94a5098c3	24	product	Carrots	2022-11-05 07:29:09.243428+08	f	1	173	orange 	0.00	0.00	0.00	1	2022-11-10 06:20:40.44257+08
34	77e11a11-e523-41f8-be81-e2d7e8757c7b	24	product	raddish	2022-11-05 07:42:22.599678+08	f	1	173	labanos	0.00	0.00	0.00	1	2022-11-10 06:20:40.44257+08
40	ae452ed5-31f2-46c2-824b-9d6acde4f587	24	future_crop	Culls	2022-11-10 12:19:55.221033+08	f	1	173	raised in a stressed free environment	300.00	280.00	0.00	3	2022-11-30 08:00:00+08
14	97d32c4b-1855-4d78-aa05-794b3e84e8b9	4	product	DragoFruit	2022-10-31 06:08:53.614001+08	t	1	173	Drago	0.00	0.00	0.00	1	2022-11-10 06:20:40.44257+08
8	42b2efbf-11f6-4e75-bb91-88d8c0f308a2	4	future_crop	Chili	2022-09-25 11:08:20.003949+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	100.00	45.00	0.00	1	2022-11-10 06:20:40.44257+08
39	1a6cb07c-27a4-4ca7-bd86-3d2e9037df22	20	future_crop	Dragon Fruit	2022-11-10 06:01:25.847456+08	f	1	173	This is a dragon fruit from the future	100000.00	100.00	0.00	2	2022-11-09 08:00:00+08
31	771ed0fe-9870-4d9a-93e8-ead3794365bd	24	product	Chocolate	2022-11-05 07:35:13.631619+08	t	1	173	almonds	0.00	0.00	0.00	1	2022-11-10 06:20:40.44257+08
35	af8b38a9-d132-46cf-a7dd-2e48476b541c	24	product	Upo	2022-11-10 01:25:28.660887+08	f	1	173	seedless upo	200.00	100.00	0.00	1	2022-11-09 08:00:00+08
16	4fcf443e-3a6d-4857-9318-033733ce96b1	19	product	Test Product 1	2022-10-31 06:15:12.009441+08	t	1	173	asdf	0.00	0.00	0.00	1	2022-11-10 06:20:40.44257+08
17	bef1d653-d20b-4b78-b26d-2670b97414d0	19	product	Product 2	2022-10-31 12:21:36.523741+08	t	1	173	Test	0.00	0.00	0.00	1	2022-11-10 06:20:40.44257+08
32	0d58a5ff-1ecb-47f1-87e5-23ad247209d8	24	product	basket	2022-11-05 07:40:15.672855+08	f	1	173	native basket	0.00	0.00	0.00	4	2022-11-09 08:00:00+08
33	ec84ea87-fcbf-423a-baa0-2549d63de7ad	24	product	onions	2022-11-05 07:41:44.354866+08	f	1	173	red and white	0.00	0.00	0.00	5	2022-11-09 08:00:00+08
36	ae3caa63-ee5c-419f-8a38-13af04653a3f	24	product	upo	2022-11-10 01:29:45.392068+08	t	1	173	seedless upo	1000.00	130.00	0.00	1	2022-11-10 06:20:40.44257+08
37	098a886c-0f75-43cf-896a-7876de7cf4c2	24	product	upo	2022-11-10 01:31:19.2527+08	f	1	173	seedless upo	5000.00	150.00	0.00	5	2022-11-09 08:00:00+08
38	4203b1e6-dee5-40b1-b568-90f24ed1318d	20	product	Product 10	2022-11-10 05:06:28.362602+08	t	1	173	This is prodcut #10	100000.00	10.00	0.00	1	2022-11-10 06:20:40.44257+08
48	71134ff3-063f-4a33-b149-4cff8151f755	25	product	grapes	2022-11-11 06:33:41.887837+08	f	1	173	seedless	1000.00	200.00	0.00	1	2022-11-19 08:00:00+08
49	5e61c3d8-df2f-443a-a7d2-197a5bb178d3	25	future_crop	grapes	2022-11-11 06:34:32.800928+08	f	1	173	sour	500.00	200.00	0.00	1	2022-11-30 08:00:00+08
26	db2cf2dc-553b-4c9b-a000-17987143bd60	20	product	Product 6	2022-11-01 16:58:57.449599+08	t	2	173	Test	1000.00	1000.00	5000.00	1	2022-11-10 06:20:40.44257+08
22	adaf3e31-0bdb-4a16-86cd-eaf9b1ebe718	20	product	Product 3	2022-11-01 12:49:35.383889+08	t	2	173	Tes Prdut3	1000.00	1000.00	5000.00	1	2022-11-10 06:20:40.44257+08
28	12e1ae9c-a119-4301-a9e4-a748115ba90c	24	product	champoy	2022-11-03 14:14:55.847075+08	f	1	173	seedless	1000.00	1000.00	5000.00	1	2022-11-10 06:20:40.44257+08
53	8c4e1349-9f55-47f9-9c5c-c8df57dd5bc7	26	future_crop	grapes	2022-11-11 06:57:09.787609+08	f	1	173	seedless	200.00	10.00	0.00	2	2022-11-26 08:00:00+08
54	ab3c65ca-c963-4a10-829f-a3df6d6cb325	26	product	grapes	2022-11-11 06:58:18.775676+08	f	1	173	black	300.00	20.00	0.00	1	2022-11-11 08:00:00+08
41	73d14bab-c434-464f-8cb7-9a1559d816bf	24	product	Native Chicken	2022-11-11 04:49:03.079098+08	f	1	173	white chicken	600.00	180.00	0.00	3	2022-12-15 08:00:00+08
57	96a92f81-fe2c-4d6d-a9a4-84f709891771	26	future_crop	chicken	2022-11-11 09:07:14.14926+08	t	1	173	dressed 	5000.00	180.00	0.00	3	2022-11-30 08:00:00+08
58	c685c839-30c5-4944-acd5-2a4a9831e566	20	product	Test 1	2022-11-12 11:02:40.046588+08	f	1	173	Tet 1	100000.00	100.00	0.00	1	2022-11-12 00:00:00+08
59	ae6bc351-5694-4d83-a9fb-10208916d3dd	20	product	Te 2	2022-11-12 11:34:59.438525+08	f	1	173	aaaa	20000.00	10.00	0.00	5	2022-11-12 00:00:00+08
60	95eaf1c7-1bb4-4411-8e50-1207342140cc	20	product	Test 21	2022-11-13 10:54:01.948766+08	f	1	173	asdfasdf	100000.00	12.00	0.00	2	2022-11-19 00:00:00+08
51	12c6af0d-454a-4d3f-a1fc-50175056fb20	20	product	Apple	2022-11-11 06:42:44.969382+08	f	2	173	Apple	8000.00	1000.00	5000.00	1	2022-11-11 06:42:44.969382+08
27	c9b77774-84b2-4a1a-a4a2-5f8d8ecdd9b3	20	product	Watermelon	2022-11-02 04:09:58.709174+08	f	2	173	This is my 6th product	1000.00	1000.00	5000.00	1	2022-11-10 06:20:40.44257+08
10	deb1eb1b-9a04-40e0-8a0f-c6b7eae98033	4	product	Pechay	2022-09-26 06:05:25.656331+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	200.00	1.50	0.00	4	2022-11-10 06:20:40.44257+08
7	7094d196-c751-418e-bc9c-abb6addf6cd0	19	product	Talong	2022-09-25 11:07:46.24174+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	100.60	30.00	0.00	1	2022-11-10 06:20:40.44257+08
9	28b657f6-82fe-4a64-8c28-a5d7b88f01dd	4	product	Sigarilyas	2022-09-25 13:42:01.719288+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	58.00	41.00	0.00	2	2022-11-10 06:20:40.44257+08
2	d2920281-4b4b-41d5-9344-5bcf2db051d6	4	product	Bell Pepper	2022-09-22 20:20:42.202238+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	2.50	25.00	0.00	2	2022-11-10 06:20:40.44257+08
4	12ef775b-a245-4ba2-8b4b-45c43a10962b	4	product	Upo	2022-09-22 20:23:35.812796+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	3.50	20.00	100.00	1	2022-11-10 06:20:40.44257+08
1	151ea420-3504-4205-90c4-db15b3ed0f40	4	product	Sayote	2022-09-22 19:10:12.571565+08	f	1	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	78.00	40.00	0.00	3	2022-11-10 06:20:40.44257+08
5	78609ea7-68eb-45e8-a938-3f96374136b4	4	product	Mango	2022-09-25 11:01:18.111197+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	10.00	35.00	75.00	4	2022-11-10 06:20:40.44257+08
6	e0a12dba-449f-4710-93ef-50bda50698b9	4	product	Grapes	2022-09-25 11:05:18.67624+08	f	2	173	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.	10.00	3.50	1000.00	3	2022-11-10 06:20:40.44257+08
29	a75cc71a-c985-487a-a6d9-e84a25db2f49	24	product	picnic	2022-11-03 15:20:11.631541+08	f	4	173	ketchup	1.00	1000.00	5000.00	1	2022-11-10 06:20:40.44257+08
24	1f66b675-72e8-4217-a8f0-92eebdbb143c	20	product	Product 4	2022-11-01 12:58:15.188916+08	t	2	173	Test produt	1000.00	1000.00	5000.00	1	2022-11-10 06:20:40.44257+08
25	97d67717-389e-48e3-b18f-d1cd220b20c9	20	product	Product 5	2022-11-01 13:46:05.480508+08	t	2	173	Test prduct	1000.00	1000.00	5000.00	1	2022-11-10 06:20:40.44257+08
52	d40f8c31-beb0-4d63-a889-9dcea9d26d70	26	product	grapes	2022-11-11 06:53:59.214323+08	f	2	173	sour	100.00	1000.00	5000.00	1	2022-11-11 06:53:59.214323+08
55	3f8fc4ac-cdcc-41b7-8d1c-5e260bea7cd7	24	product	chicken	2022-11-11 07:42:45.04086+08	f	2	173	dressed	15000.00	1000.00	5000.00	1	2022-11-11 07:42:45.04086+08
56	4ff6b0ff-4ee8-44e0-b778-778d0bb89845	26	product	chicken	2022-11-11 08:58:58.230304+08	f	2	173	dressed	100.00	1000.00	5000.00	1	2022-11-11 08:58:58.230304+08
63	4f1850b0-6bb5-49b7-849f-80657cffbbd2	20	product	Dragon Fruit	2022-11-13 17:16:10.095271+08	f	2	173	asdfa	1000.00	1000.00	5000.00	2	2022-11-13 17:16:10.095271+08
64	b8444473-6331-44d3-a082-df9a59bf983b	20	looking_for	Looking for 1	2022-11-13 19:03:26.193777+08	f	2	173	asdf	10000.00	1000.00	5000.00	2	2022-11-13 19:03:26.193777+08
65	cb1ac6ba-c279-4fd3-9784-c3b1e4448523	20	looking_for	LookingFo 2	2022-11-13 19:08:29.160972+08	f	2	173	asdfasdf	5000.00	1000.00	5000.00	2	2022-11-13 19:08:29.160972+08
66	27e0d680-dda8-4612-9a04-dd30416274f2	20	looking_for	Lookking For 3	2022-11-13 19:14:46.471113+08	f	3	173	dfl	13420.00	1000.00	5000.00	2	2022-11-13 19:14:46.471113+08
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
12	home	t	3	2	1	quezon city	19	2022-11-03 14:16:56.431615+08
13	home	t	3	2	1	6	20	2022-11-11 06:31:54.600089+08
14	home	t	3	2	1	6	21	2022-11-11 06:56:22.471408+08
\.


--
-- Data for Name: seller_documents; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.seller_documents (pk, seller_pk, type, document_pk, date_created) FROM stdin;
3	18	document	93	2022-11-01 17:42:06.750558+08
4	18	profile_photo	94	2022-11-01 17:42:06.750558+08
5	19	document	111	2022-11-03 14:16:56.431615+08
6	19	document	113	2022-11-03 14:16:56.431615+08
7	19	profile_photo	112	2022-11-03 14:16:56.431615+08
8	20	document	135	2022-11-11 06:31:54.600089+08
9	20	profile_photo	136	2022-11-11 06:31:54.600089+08
10	21	document	143	2022-11-11 06:56:22.471408+08
11	21	profile_photo	144	2022-11-11 06:56:22.471408+08
\.


--
-- Data for Name: sellers; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.sellers (pk, uuid, user_pk, date_created, archived, mobile_number, about) FROM stdin;
1	0fae2433-ba7b-46d8-a7cb-2216a4497f9e	4	2022-10-19 05:17:13.778888+08	f	639162052424	\N
2	0fae2433-ba7b-46d8-a7cb-2216a1111f9e	9	2022-10-19 05:17:13.778888+08	f	639162052424	\N
17	7ec0c6ba-6e0b-4bdf-8cae-31bfcee804d6	19	2022-10-30 17:22:01.18978+08	f	9172052424	\N
18	fe9472db-e2c4-4f23-aa9c-8c858c445be0	20	2022-11-01 17:42:06.750558+08	f	9172052424	\N
19	2ccef005-fcdd-44df-861b-15b459a922a4	24	2022-11-03 14:16:56.431615+08	f	9176590236	\N
20	8c01740a-8305-4ca0-82b0-1d67b85f0f68	25	2022-11-11 06:31:54.600089+08	f	9178569686	\N
21	4242523f-5c93-4409-bbc2-847ba1c21f39	26	2022-11-11 06:56:22.471408+08	f	9158529686	\N
\.


--
-- Data for Name: sessions; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.sessions (pk, token, expiration, date_created, account_pk) FROM stdin;
144	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1haWxAZ21haWwuY29tIiwic3ViIjoxMTMsImlhdCI6MTY2NjU2MDk4NiwiZXhwIjoxNjY2NjA0MTg2fQ.W976m4hhomIkFX3xKzX6ZtRcU_07csI-t5VC1wUxLBg	2022-10-24 17:36:26+08	2022-10-24 05:36:26.819225+08	113
182	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1haWwwMUBnbWFpbC5jb20iLCJzdWIiOjEzNSwiaWF0IjoxNjY3MTg5OTcxLCJleHAiOjE2NjcyMzMxNzF9.DdGkbFdOvwyhSAcQBQts1GjCAzqj7OQI9ppo9gpopnc	2022-11-01 00:19:31+08	2022-10-31 12:19:31.123559+08	135
195	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1haWwwNEBnbWFpbC5jb20iLCJzdWIiOjEzOCwiaWF0IjoxNjY3MzM2NDYwLCJleHAiOjE2NjczNzk2NjB9._6ATVsikhJ7NLMhtU51hzJ3yUASWkRSKi_sJpEv-ggs	2022-11-02 17:01:00+08	2022-11-02 05:01:00.240942+08	138
215	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGVybWllLmNhYnJpdG9Aa3dtdWx0aW1lZGlhLnBoIiwic3ViIjoxNDIsImlhdCI6MTY2ODExOTc1OSwiZXhwIjoxNjk5NjU1NzU5fQ.hhma9QqXDcaDzFIwRlVxmtLvem6zb2tibsh09m4qm0Y	2023-11-11 06:35:59+08	2022-11-11 06:35:59.751478+08	142
219	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiY2hlcmllLmNhYnJpdG9Aa3dtdWx0aW1lZGlhLnBoIiwic3ViIjoxNDAsImlhdCI6MTY2ODEyNDk0OSwiZXhwIjoxNjk5NjYwOTQ5fQ.2g6jdxlm-p7p6U8OQPqaMThvop6qAh1nHyUtGV2HkOg	2023-11-11 08:02:29+08	2022-11-11 08:02:29.343049+08	140
220	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYmVybmFkaWVAc2FtZGhhbmEub3JnIiwic3ViIjoxNDQsImlhdCI6MTY2ODEyNjYwOCwiZXhwIjoxNjk5NjYyNjA4fQ.PwKgi9t3eKIhRmy34OL9N164r0HmTixh7PJFVa9UQ5w	2023-11-11 08:30:08+08	2022-11-11 08:30:08.572241+08	144
222	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoid2VuZ3F1aW5zQGdtYWlsLmNvbSIsInN1YiI6MTQ2LCJpYXQiOjE2NjgxMjcxOTksImV4cCI6MTY5OTY2MzE5OX0._Y1kxIONnH_anYInM34ooj-gqBbiHC95LdEu8gZaFN0	2023-11-11 08:39:59+08	2022-11-11 08:39:59.643045+08	146
223	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9hbmphbWlzb2xhbWluQGdtYWlsLmNvbSIsInN1YiI6MTQ3LCJpYXQiOjE2NjgxMjcyMjAsImV4cCI6MTY5OTY2MzIyMH0.nonmQTyHZCIz__hdsLS-7Y9WZmYaHiaQZ-vSaKELfv0	2023-11-11 08:40:20+08	2022-11-11 08:40:20.322614+08	147
224	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiYWxmcmVkQHNhbWRoYW5hLm9yZyIsInN1YiI6MTQ5LCJpYXQiOjE2NjgxMjc0ODUsImV4cCI6MTY5OTY2MzQ4NX0.Ik3vkNDIb8yQMcfNIKnSsQfMG9_HGptdKfRF4p6WcTE	2023-11-11 08:44:45+08	2022-11-11 08:44:45.220841+08	149
225	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibHVtYWN0b2RhaW1zeWxwaEBnbWFpbC5jb20iLCJzdWIiOjE0OCwiaWF0IjoxNjY4MTI3NDkxLCJleHAiOjE2OTk2NjM0OTF9.6OCQ1gRH4eq5wVYDo66lfQ8tRLG06pF63yJa7zwNy4Y	2023-11-11 08:44:51+08	2022-11-11 08:44:51.728736+08	148
226	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiaGVybWllLmNhYnJpdG9AZ21haWwuY29tIiwic3ViIjoxNDMsImlhdCI6MTY2ODEyNzk5MiwiZXhwIjoxNjk5NjYzOTkyfQ.u9EY9hGRNGNyOf8U72sq8NTWsSUqOFPXwIiYrgmtUEo	2023-11-11 08:53:12+08	2022-11-11 08:53:13.021586+08	143
227	eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZW1haWwwMkBnbWFpbC5jb20iLCJzdWIiOjEzNiwiaWF0IjoxNjY4MzQ0ODI4LCJleHAiOjE2OTk4ODA4Mjh9.L2tSKPBDP4XHS-oQbNFV2gMvNDnI0pjFftm1TkO6L4w	2023-11-13 21:07:08+08	2022-11-13 21:07:08.614905+08	136
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
7	orders	Received	2022-11-10 23:57:43.182869+08	f	4
6	orders	Awaiting Confirmation	2022-10-25 06:28:39.31071+08	f	4
8	orders	Posted	2022-11-13 19:17:07.055217+08	f	4
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
13	home	3	2	1	Balsancat	22	2022-11-02 04:49:21.156761+08	f
14	home	3	2	1	vv,quezoncity	23	2022-11-03 14:04:15.166278+08	f
15	home	3	2	1	vv, quezon city	24	2022-11-03 14:06:24.207766+08	f
16	home	3	2	1	abc st	25	2022-11-09 23:33:44.656693+08	f
17	home	3	2	1	6	26	2022-11-11 06:53:19.563584+08	f
18	home	3	2	1	Poblacion, Quezon, Bukidnon 	27	2022-11-11 08:29:57.401826+08	f
19	home	3	2	1	91 tomas saco street cagayan de oro city	28	2022-11-11 08:39:33.871988+08	f
20	home	3	2	1	91 tomas saco	29	2022-11-11 08:39:50.200793+08	f
21	home	3	2	1	Nazareth, CDO	30	2022-11-11 08:44:20.823539+08	f
22	home	3	2	1	cdo	31	2022-11-11 08:44:42.274849+08	f
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
23	22	profile_photo	102	2022-11-02 04:49:21.156761+08
24	22	id_photo	103	2022-11-02 04:49:21.156761+08
25	23	profile_photo	104	2022-11-03 14:04:15.166278+08
26	23	id_photo	105	2022-11-03 14:04:15.166278+08
27	24	profile_photo	106	2022-11-03 14:06:24.207766+08
28	24	id_photo	107	2022-11-03 14:06:24.207766+08
29	25	profile_photo	122	2022-11-09 23:33:44.656693+08
30	25	id_photo	123	2022-11-09 23:33:44.656693+08
31	26	profile_photo	140	2022-11-11 06:53:19.563584+08
32	26	id_photo	141	2022-11-11 06:53:19.563584+08
33	27	profile_photo	148	2022-11-11 08:29:57.401826+08
34	27	id_photo	149	2022-11-11 08:29:57.401826+08
35	28	profile_photo	152	2022-11-11 08:39:33.871988+08
36	28	id_photo	155	2022-11-11 08:39:33.871988+08
37	29	profile_photo	153	2022-11-11 08:39:50.200793+08
38	29	id_photo	154	2022-11-11 08:39:50.200793+08
39	30	profile_photo	162	2022-11-11 08:44:20.823539+08
40	30	id_photo	163	2022-11-11 08:44:20.823539+08
41	31	profile_photo	161	2022-11-11 08:44:42.274849+08
42	31	id_photo	164	2022-11-11 08:44:42.274849+08
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
9	b2c1dee9-d35b-4542-8414-2e1ca0802102	Nixon	Briley	\N	\N	2022-09-30	9162052424	124	f	rpascual0817@gmail.com.au	173	2022-09-30 07:13:41.073247+08	1	\N	f
11	ef972bc6-d51b-4ef9-8a23-0bdc42fb9fb5	Mcfarland	Molly	\N	\N	2022-10-03	9162052425	127	f	rpascual0810@gmail.com.au	173	2022-10-03 20:54:54.643943+08	1	\N	f
14	4b0cb2fb-1035-4fab-9711-d0cfbaa47603	Shields	Jamal	\N	\N	2022-10-05	9162052424	130	f	rpascual0802@gmail.com.au	173	2022-10-05 04:44:17.107276+08	1	\N	f
17	e70f0db2-b444-476d-b063-acc0e67ed2c6	Rosario	Hugo	\N	\N	2022-10-05	9162052424	133	f	rpascual0803@gmail.com.au	173	2022-10-05 04:51:25.523334+08	1	\N	f
18	4f926912-d0fb-4a94-8a52-834e7749abf3	Brenden	Frazier	\N	\N	2022-10-06	9162052424	134	f	rpascual0804@gmail.com.au	173	2022-10-05 04:56:16.406206+08	1	\N	f
19	cea461ac-82c8-492d-840b-079284a3fa5c	Leach	Derick	\N	\N	2022-10-07	9172052424	135	f	email01@gmail.com	173	2022-10-05 05:10:45.232267+08	1	\N	f
4	1e2e27ca-06ba-4a9f-951b-a130567eafd01	Valenzuela	Dana		6	1986-08-12	09162052424	113	f	email@gmail.com	173	2022-09-24 07:28:42.607938+08	1	\N	f
21	6496c26f-9d54-47ed-8e34-45357f82e75d	Pascual	Rafael	\N	\N	2014-11-07	9172052424	137	f	email03@gmail.com	173	2022-11-01 17:28:15.553442+08	1	About Me	f
20	685a941b-c5b9-42d2-8197-b06be244b6c2	Pascual	Rafael	\N	\N	2015-11-01	9172052424	136	f	email02@gmail.com	173	2022-11-01 10:27:46.155341+08	1	This is about me!	f
22	81161fb3-420b-42ec-ba40-3244cc248ffe	Pascual	Rafael	\N	\N	1988-11-01	9172052424	138	f	email04@gmail.com	173	2022-11-02 04:49:21.156761+08	1	All about me	f
23	add8bf4b-f05f-49d1-9f10-1d66c7a2442c	cabrito	cherie	\N	\N	2022-11-03	9176590236	139	f	cherie.cabrito@gmail.com	173	2022-11-03 14:04:15.166278+08	1	abcde	f
24	b7171a52-bbb6-4283-ad79-3111fb0a66ea	cabrito	cherie	\N	\N	2022-11-03	9176590236	140	f	cherie.cabrito@kwmultimedia.ph	173	2022-11-03 14:06:24.207766+08	1	abcde	f
25	6a0bd733-d9be-417d-a226-894706cd05a4	cabrito	hermie	\N	\N	2022-11-09	9178569686	142	f	hermie.cabrito@kwmultimedia.ph	173	2022-11-09 23:33:44.656693+08	1	director	f
26	e3d9bbfa-a9b4-49dd-b461-ba39103dc2ce	cabrito	hermie	\N	\N	2022-11-11	9158529686	143	f	hermie.cabrito@gmail.com	173	2022-11-11 06:53:19.563584+08	1	abc	f
27	fce201bb-fb53-4613-8c76-0d153a554794	Jamora	Bem	\N	\N	1994-01-29	9171173823	144	f	bernadie@samdhana.org	173	2022-11-11 08:29:57.401826+08	1		f
28	e73b8ad6-4ba8-445c-b8c3-3a3489682ad1	quinones	erwin	\N	\N	1974-05-06	9175853817	146	f	wengquins@gmail.com	173	2022-11-11 08:39:33.871988+08	1		f
29	0ed4c5eb-5061-4825-8a13-4d0e99a2a707	Jamisolamin 	joan	\N	\N	2022-11-11	9175432155	147	f	joanjamisolamin@gmail.com	173	2022-11-11 08:39:50.200793+08	1		f
30	bfacb1a8-1135-4ce6-8d63-e6b74f054548	lumactod	cane	\N	\N	1989-07-01	9175300255	148	f	lumactodaimsylph@gmail.com	173	2022-11-11 08:44:20.823539+08	1		f
31	1cb9fe30-14df-40a3-9b1c-1371197e5c8b	santos	alfred	\N	\N	2022-07-10	9475029768	149	f	alfred@samdhana.org	173	2022-11-11 08:44:42.274849+08	1	good	f
\.


--
-- Data for Name: validations; Type: TABLE DATA; Schema: public; Owner: samdhana
--

COPY public.validations (pk, type, value, status, date_created, archived) FROM stdin;
\.


--
-- Name: accounts_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.accounts_pk_seq', 149, true);


--
-- Name: areas_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.areas_pk_seq', 1, true);


--
-- Name: article_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.article_documents_pk_seq', 5, true);


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

SELECT pg_catalog.setval('public.documents_pk_seq', 177, true);


--
-- Name: emails_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.emails_pk_seq', 18, true);


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

SELECT pg_catalog.setval('public.logs_pk_seq', 119, true);


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

SELECT pg_catalog.setval('public.orders_pk_seq', 77, true);


--
-- Name: permissions_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.permissions_pk_seq', 1, false);


--
-- Name: product_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.product_documents_pk_seq', 83, true);


--
-- Name: product_ratings_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.product_ratings_pk_seq', 7, true);


--
-- Name: products_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.products_pk_seq', 66, true);


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

SELECT pg_catalog.setval('public.seller_addresses_pk_seq', 14, true);


--
-- Name: seller_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.seller_documents_pk_seq', 11, true);


--
-- Name: sellers_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.sellers_pk_seq', 21, true);


--
-- Name: sessions_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.sessions_pk_seq', 227, true);


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

SELECT pg_catalog.setval('public.statuses_pk_seq', 8, true);


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

SELECT pg_catalog.setval('public.user_addresses_pk_seq', 22, true);


--
-- Name: user_cart_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_cart_pk_seq', 1, false);


--
-- Name: user_documents_pk_seq; Type: SEQUENCE SET; Schema: public; Owner: samdhana
--

SELECT pg_catalog.setval('public.user_documents_pk_seq', 42, true);


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

SELECT pg_catalog.setval('public.users_pk_seq', 31, true);


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

