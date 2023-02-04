interface iProps {
  tabs: iContent[];
}
interface iContent {
  name: string;
  text: string;
  children: any;
}
export const TabsCustom = ({ tabs }: iProps) => {
  return (
    <div>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabs.map((x: iContent, index: number) => {
          return (
            <>
              <li className="nav-item" role={x.name}>
                <button
                  className={`nav-link ${index === 0 ? "active" : ""}`}
                  id={`#${x.name}-tab`}
                  data-bs-toggle="tab"
                  data-bs-target={`#${x.name}-tab-pane`}
                  type="button"
                  role="tab"
                  aria-controls={`${x.name}-tab-pane`}
                  aria-selected={index === 0 ? true : false}
                >
                  {x.text}
                </button>
              </li>
            </>
          );
        })}
      </ul>

      <div className="tab-content" id="myTabContent">
        {tabs.map((x: iContent, index: number) => {
          return (
            <div
              className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
              id={`${x.name}-tab-pane`}
              role="tabpanel"
              aria-labelledby={`${x.name}-tab`}
              tabIndex={0}
            >
              {x.children}
            </div>
          );
        })}
      </div>
    </div>
  );
};
