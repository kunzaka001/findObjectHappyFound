use axum::{
    extract::Multipart,
    http::response,
    response::{IntoResponse, Response},
    routing::{post, put},
    Router,
};
use garde::{rules::length::bytes, Validate};
use serde::{Deserialize, Serialize};

use crate::valid::*;
use anyhow::Result;
use axum::extract::{Json, Path, Query};
use dotenv::dotenv;
use reqwest::{header::HeaderMap, Client, StatusCode};
use std::env;

// pub async fn post_to_sql_database() -> impl IntoResponse {
//     // Load environment variables once
//     dotenv().ok();
//     let endpoint_url = match env::var("ENDPOINT_URL") {
//         Ok(url) => url,
//         Err(_) => {
//             return (
//                 StatusCode::INTERNAL_SERVER_ERROR,
//                 "ENDPOINT_URL not set".to_string(),
//             );
//         }
//     };
//     let service_role = match env::var("SERVICE_ROLE") {
//         Ok(role) => role,
//         Err(_) => {
//             return (
//                 StatusCode::INTERNAL_SERVER_ERROR,
//                 "SERVICE_ROLE not set".to_string(),
//             );
//         }
//     };
//     let project_name = env::var("PROJECT_NAME").unwrap_or_else(|_| "default".to_string());
//     let folder_name = "folder";
// }
