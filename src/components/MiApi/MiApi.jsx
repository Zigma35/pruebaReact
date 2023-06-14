export const getHoliday = async () => {
    try {
      const result = await fetch('https://api.victorsanmartin.com/feriados/en.json');
      const jsonData = await result.json();
      return jsonData.data;
    } catch (error) {
      alert(error.message);
    }
  };

  