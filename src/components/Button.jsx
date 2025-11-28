import styled from "@emotion/styled";

const VARIANTS = {
  primary: `
    background: ${({ theme }) => theme.colors.accent};
    color: #fff;
    border: none;
    &:hover {
      opacity: 0.8;
    }
    &:disabled {
      background: ${({ theme }) => theme.colors.disabled};
      cursor: not-allowed;
    }
  `,
  secondary: `
    background: transparent;
    border: 1px solid ${({ theme }) => theme.colors.accent};
    color: ${({ theme }) => theme.colors.accent};
    &:hover {
      background: ${({ theme }) => theme.colors.accent};
      color: #fff;
    }
  `,
};

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family};
  transition: all 0.3s ease;
  ${({ $variant }) => VARIANTS[$variant] || VARIANTS.primary}
`;

export const Button = ({
  children,
  variant = "primary",
  type = "button",
  ...props
}) => (
  <StyledButton type={type} $variant={variant} {...props}>
    {children}
  </StyledButton>
);
