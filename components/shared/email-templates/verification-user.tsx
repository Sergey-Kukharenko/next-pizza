import * as React from 'react';

interface Props {
  code: string;
}

export const VerificationUserTemplate: React.FC<Props> = ({ code }) => (
  <div>
    <div>
      Код подтверждения: <h2>{code}</h2>
    </div>

    <p>
      <a href={`http://localhost:3000/api/auth/verify?code=${code}`}>
        Подтвердить регистрацию
      </a>
    </p>
  </div>
);
