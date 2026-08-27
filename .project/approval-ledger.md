# UNA-Elementor Approval Ledger

Use this file to preserve human gates that materially change project state.

## Gate Values
- `Approve` — current stage is accepted and may advance.
- `Revise` — current stage is not accepted; requested changes must be resolved before advancing.
- `Override` — the Product Owner intentionally accepts a deviation and the reason should be recorded.

## Current Product Baseline

| Area | Status | Notes |
| --- | --- | --- |
| Product Name | Approve | UNA-Elementor |
| Platform | Approve | WordPress + Elementor V4 |
| Core Principle | Approve | Build the system first. Approve it. Then multiply it. |
| Delivery Workflow | Approve | WP Engine + LocalWP iterative build/review loop |
| Step 6 Scope | Approve | Build Core Page System, not production-scale content population |
| Baseline Plugins | Approve | Elementor V4, Gravity Forms, Trustindex, Yoast SEO |
| User Journey Model | Approve | Discover → Land → Explore → Intent → Convert |
| Primary Actions | Approve | Book, Call, Visit / Directions, Contact |
| Tracking Fallback | Approve | Tracking-ready when access is missing; never claim live tracking before verification |
| Accessibility Rule | Approve | Native semantics first; ARIA only where needed |
| Pre-Population Stress Test | Approve | Mandatory before Step 6 approval |

## Project-Specific Gates
Add project approvals below rather than rewriting the product baseline unless meaningful new evidence changes the UNA-Elementor standard.
