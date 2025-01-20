export const getEvent = async () => {
    const token = "vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh";
    const response = await fetch(
      "https://tech-class.datacore.machinevision.global/items/event_penabur",
      {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
  
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }
  
    return response.json();
  };

export const getBlog = async () => {
  const token = "vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh";
  const response = await fetch(
    "https://tech-class.datacore.machinevision.global/items/blogs_penabur/",
    {
      method: "GET",
      headers: {
          Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const getUser = async () => {
  const token = "vh073_EDr_XuWQ0PO1nm-ulUt6kUJmOh";
  const response = await fetch(
    "https://tech-class.datacore.machinevision.global/items/User_Penabur",
    {
      method: "GET",
      headers: {
          Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Error: ${response.status} ${response.statusText}`);
  }

  return response.json();
};