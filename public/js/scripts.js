const proxyUrl = "http://localhost:3000/api/earthquake";

async function fetchEarthquakeInfo() {
    const earthquakeInfoDiv = document.getElementById("earthquake-info");

    try {
        const response = await fetch(proxyUrl);
        const data = await response.json();

        earthquakeInfoDiv.innerHTML = `
            <p><strong>タイトル:</strong> ${data.title}</p>
            <p><strong>更新日時:</strong> ${data.updated}</p>
            <p><strong>詳細情報:</strong> ${data.content}</p>
        `;
    } catch (error) {
        earthquakeInfoDiv.innerHTML = `<p style="color: red;">地震情報の取得に失敗しました</p>`;
    }
}

document.addEventListener("DOMContentLoaded", fetchEarthquakeInfo);