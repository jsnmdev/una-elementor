# UNA-Elementor Delivery Workflow

## End-to-End Flow

1. Client Onboarded
2. Brief Complete
3. WordPress Install Created in WP Engine
4. Clean LocalWP Environment Established
5. Pull Current WP Engine Install to LocalWP
6. Build Core Page System
7. Internal Review + Approval
8. Content Population
9. QA + Optimization
10. Push to WP Engine Staging + Stakeholder Review
11. Final Approval + Production Launch

## Push / Pull Discipline

Typical implementation loop:

`WP Engine → Pull to LocalWP → Work Locally → Push to Staging → Review → Pull/Push as needed → Repeat`

Production is not the everyday work environment.

## Step 6 Gate

Step 6 is complete only when the reusable page system is approved. Building many pages is not evidence that the system is ready.

Before content population begins, the representative templates and global systems must be stable enough to multiply without repeated design decisions.

## Content Population

Content population begins after Step 6 approval and uses the approved:
- global settings;
- component library;
- Theme Builder/template structures;
- content/data architecture;
- user-flow and CTA conventions;
- SEO conventions;
- measurement/event map.

If population exposes a real system defect, fix the system owner first, then continue. Do not patch dozens of individual pages.

## Staging

Staging is the review and verification environment for:
- stakeholder review;
- responsive checks;
- forms;
- integrations;
- redirects where applicable;
- analytics verification when access exists;
- content/SEO QA;
- final pre-production checks.

## Production

Before production:
- final approval is explicit;
- backup/restore path is understood;
- required forms/integrations are verified;
- critical Book / Call / Visit / Contact paths are tested;
- tracking status is accurately documented;
- known blockers are resolved.

After launch, run a targeted smoke test on the live site.