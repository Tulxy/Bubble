import { useState } from "react";

function PlanBoard() {
  const [plan, setPlan] = useState({
    start: "",
    end: "",
    title: "",
    description: "",
    steps: []
  });

  const [plans, setPlans] = useState([]);
  const [stepInput, setStepInput] = useState("");

  const handleChange = (e) => {
    setPlan({ ...plan, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (plan.title.trim() === "") return;

    setPlans([...plans, { ...plan, completed: false }]);

    setPlan({
      start: "",
      end: "",
      title: "",
      description: "",
      steps: []
    });
    setStepInput("");
  };

  const addStep = () => {
    if (stepInput.trim() === "") return;
    setPlan({
      ...plan,
      steps: [...plan.steps, { text: stepInput, done: false }]
    });
    setStepInput("");
  };

  // přepnutí dokončení kroku
  const toggleStep = (planIndex, stepIndex) => {
    const newPlans = [...plans];
    newPlans[planIndex].steps[stepIndex].done =
      !newPlans[planIndex].steps[stepIndex].done;
    setPlans(newPlans);
  };

  // přepnutí dokončení plánu
  const togglePlanCompleted = (planIndex) => {
    const newPlans = [...plans];
    newPlans[planIndex].completed = !newPlans[planIndex].completed;
    setPlans(newPlans);
  };

  // smazání plánu
  const deletePlan = (planIndex) => {
    const newPlans = plans.filter((_, i) => i !== planIndex);
    setPlans(newPlans);
  };

  return (
    <div className="w-75 m-5">
      <h1>📊 Plans</h1>

      <form onSubmit={handleSubmit}>
        <label className="form-label">Začátek plánu:</label>
        <input
          type="date"
          name="start"
          value={plan.start}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <label className="form-label">Konec plánu:</label>
        <input
          type="date"
          name="end"
          value={plan.end}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <label className="form-label">Název:</label>
        <input
          type="text"
          name="title"
          value={plan.title}
          onChange={handleChange}
          className="form-control mb-2"
        />

        <label className="form-label">Popis:</label>
        <textarea
          name="description"
          value={plan.description}
          onChange={handleChange}
          className="form-control mb-2"
          rows="6"
          placeholder="Popis"
        ></textarea>

        <label className="form-label">Body plánu:</label>
        <div className="d-flex mb-2 gap-2">
          <input
            type="text"
            placeholder="Přidej bod"
            value={stepInput}
            onChange={(e) => setStepInput(e.target.value)}
            className="form-control"
          />
          <button
            type="button"
            onClick={addStep}
            className="btn btn-outline-secondary"
          >
            ➕
          </button>
        </div>

        {plan.steps.length > 0 && (
          <ul className="list-group mb-3">
            {plan.steps.map((s, i) => (
              <li key={i} className="list-group-item">
                {i + 1}. {s.text}
              </li>
            ))}
          </ul>
        )}

        <button type="submit" className="btn btn-primary mt-2">
          Uložit plán
        </button>
      </form>

      <div className="mt-4">
        <h2>📋 Uložené plány</h2>
        {plans.length === 0 && <p>Žádné plány zatím nejsou.</p>}
        <ul className="list-group">
          {plans.map((p, planIndex) => (
            <li
              key={planIndex}
              className={`list-group-item ${
                p.completed ? "list-group-item-success" : ""
              }`}
            >
              <div className="d-flex justify-content-between align-items-center">
                <h5
                  style={{
                    textDecoration: p.completed ? "line-through" : "none"
                  }}
                >
                  {p.title}
                </h5>
                <div className="d-flex gap-2">
                  <button
                    className="btn btn-sm btn-success"
                    onClick={() => togglePlanCompleted(planIndex)}
                  >
                    {p.completed ? "↩️ Vrátit" : "✅ Dokončeno"}
                  </button>
                  <button
                    className="btn btn-sm btn-danger"
                    onClick={() => deletePlan(planIndex)}
                  >
                    ❌ Smazat
                  </button>
                </div>
              </div>

              <p>
                <strong>Od:</strong> {p.start} | <strong>Do:</strong> {p.end}
              </p>
              <p>{p.description}</p>

              {p.steps.length > 0 && (
                <ul className="list-group mt-2">
                  {p.steps.map((s, stepIndex) => (
                    <li
                      key={stepIndex}
                      className="list-group-item d-flex align-items-center"
                    >
                      <input
                        type="checkbox"
                        className="form-check-input me-2"
                        checked={s.done}
                        onChange={() => toggleStep(planIndex, stepIndex)}
                      />
                      <span
                        style={{
                          textDecoration: s.done ? "line-through" : "none"
                        }}
                      >
                        {s.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PlanBoard;
