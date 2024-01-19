export function StepMessage({ step, children }) {
  return (
    <div className="message">
      <p>
        Step {step}: <span>{children}</span>
      </p>
    </div>
  );
}
