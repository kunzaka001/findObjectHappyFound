use reqwest::Error;
use serde::Deserialize;

#[derive(Debug, Deserialize)]
struct User {
    projectId: String,
}

pub async fn verycoolfetch() -> Result<(String), Error> {
    let url = "https://thapiguide.siraphop.me/db/info";

    let user: User = reqwest::get(url).await?.json().await?;

    return Ok(user.projectId)
}
