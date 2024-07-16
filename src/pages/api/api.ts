export async function getWeather(weather: string) {
  try {
    const res = await fetch(weather);
    if (!res.ok) {
      throw new Error('데이터를 불러올 수 없습니다');
    }

    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function getResult() {
  try {
    const res = await fetch('/api/data');
    if (!res.ok) {
      throw new Error('데이터를 불러올 수 없습니다');
    }
    return res.json();
  } catch (err) {
    console.error(err);
  }
}
