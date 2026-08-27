# UNA-Elementor

UNA-Elementor is a production delivery system for WordPress + Elementor V4 websites.

It is not a generic theme kit. It defines how a project moves from a clean WordPress install to an approved, reusable page system that is ready for controlled content population, QA, staging, and launch.

## Core Principle

Build the system first. Approve it. Then multiply it.

## Platform

- WordPress
- Elementor V4
- Gravity Forms
- Trustindex
- Yoast SEO
- WP Engine
- LocalWP
- GitHub for durable project memory, standards, approvals, QA notes, event maps, and handoff documentation

## Delivery Flow

`Client Onboarded → Brief Complete → WP Engine Install → LocalWP Pull → Build Core Page System → Internal Approval → Content Population → QA → Staging Review → Final Approval → Production`

## Step 6

Step 6 is **Build Core Page System**, not full content population.

The approved architecture is documented under `.project/architecture.md`.

## Human Gates

Use explicit gates:

- Approve
- Revise
- Override

No production-scale content population begins until the Step 6 page system is approved.

## GitHub Role

GitHub is project memory and governance for UNA-Elementor. It does not pretend WordPress database state or Elementor page content behaves like a normal source-controlled application.

Keep architecture, standards, decisions, approvals, event maps, QA requirements, and handoff information here. Keep the live WordPress/Elementor build in the proper WordPress environments.
