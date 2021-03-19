export const sendMail = async (data) => {
  try {
    console.log(data);
    await axios
      .post(
        "https://api.emailjs.com/api/v1.0/email/send",
        {
          service_id: "",
          template_id: "",
          user_id: "",
          template_params: {
            to_name: data.data["firstname"],
            from_name: "searchvaccines",
            message: JSON.stringify(data.data),
            reply_to:data.email
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((data) => {
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
      });
  } catch (e) {}
};
