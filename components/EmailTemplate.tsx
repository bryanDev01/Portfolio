
interface EmailTemplateProps {
  name: string;
  mail: string;
  subject: string;
  message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  mail,
  subject,
  message,
}) => {
  return (
    <div>
      <h1>New Message from {name}!</h1>
      <p>
        <strong>Email:</strong> {mail}
      </p>
      <p>
        <strong>Subject:</strong> {subject}
      </p>
      <p>
        <strong>Message:</strong> {message}
      </p>
    </div>
  );
};
