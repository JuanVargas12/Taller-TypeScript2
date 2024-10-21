import { series } from './data.js';
let seriesTbody = document.getElementById('series');
renderSeriesInTable(series);
// Calcular y mostrar el promedio de temporadas
function calculateAverageSeasons(series) {
    const totalSeasons = series.reduce((total, serie) => total + serie.seasons, 0);
    return totalSeasons / series.length;
}
function renderSeriesInTable(series) {
    clearSeriesInTable();
    series.forEach((serie) => {
        let trElement = document.createElement("tr");
        trElement.innerHTML = `<td>${serie.id}</td>
                               <td>${serie.name}</td>
                               <td>${serie.channel}</td>
                               <td>${serie.seasons}</td>`;
        // Añadir evento para mostrar detalles de la serie
        trElement.onclick = () => showSeriesDetail(serie);
        seriesTbody.appendChild(trElement);
    });
    const averageSeasons = calculateAverageSeasons(series);
    const averageRow = document.createElement("tr");
    averageRow.innerHTML = `<td colspan="3" class="text-right"><strong>Promedio de Temporadas:</strong></td>
                            <td>${averageSeasons.toFixed(2)}</td>`;
    seriesTbody.appendChild(averageRow);
}
function clearSeriesInTable() {
    while (seriesTbody.hasChildNodes()) {
        if (seriesTbody.firstChild != null) {
            seriesTbody.removeChild(seriesTbody.firstChild);
        }
    }
}
function showSeriesDetail(serie) {
    const seriesImage = document.getElementById("series-image");
    const seriesTitle = document.getElementById("series-title");
    const seriesDescription = document.getElementById("series-description");
    const seriesUrl = document.getElementById("series-url");
    // Asignar valores a los elementos del detalle de la serie
    seriesImage.src = serie.image; // Asegúrate de que la propiedad 'image' exista en tu clase Serie
    seriesTitle.innerText = serie.name;
    seriesDescription.innerText = serie.description;
    seriesUrl.href = serie.url;
    seriesUrl.innerText = serie.url; // Mostrar la URL como texto del enlace
}
