export default function changePageIcon({url}) {
    const favicon = document.getElementById("favicon");
    favicon.href = url;
}