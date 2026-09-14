# Native Linear templates

Use the authenticated connection's discovery or current Linear documentation to identify supported template operations. Select team scope when defaults need team-specific states, labels, assignees or projects. Workspace templates hold reusable content across teams.

1. Inventory existing templates and their scope. Match this bundle's five issue types and requested human-action templates to existing entries before creating any.
2. Read the corresponding source under `../workflow/templates/`. Preserve its section structure and relevant fields. Standard templates carry the description body; form templates use supported form controls when the user requests forms.
3. Apply only known valid defaults for the selected scope. Keep shared templates free of team-specific defaults that Linear does not support at workspace scope.
4. Create or update through the available authenticated template operation. If the connection lacks it, give the user the exact source content and the relevant Linear settings location for the selected team or workspace. State that native installation remains pending.
5. Read the resulting template and confirm its scope, body and defaults. When creating an issue from it, use the supported native template association so Linear can filter and report by that template. A pasted description is only a description; report its actual creation method.

Template sources remain maintained in the bundle. Updating native templates is a deliberate operation and leaves existing issue descriptions as historical briefs.

Sources: https://linear.app/docs/issue-templates and https://linear.app/docs/form-templates.
