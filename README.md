# Angular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## How To Use
To clone and run this application, you will need:
- Git
- Node.js

Once you have those, from your command line:

```shell
# Install Angular CLI globally
npm install -g @angular/cli

# Verify that Angular CLI has been installed successfully
ng version

# Clone this repository
git clone https://github.com/Tristanv0/Angular.git

# Go into the repository
cd Angular

# Run the following command to start the Angular development server
ng serve

# You can use Ctrl+C to end the development server
```
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component (e.g. `ng generate component navbar`). A new subdirectory will be created with component-name.component.{css,html,spec.ts,ts}

In `src/app/app.component.ts`, add the following code:

```typescript
# Assuming you did ng generate component navbar
import { NavbarComponent } from './navbar/navbar.component';

# inside the @Component add NavbarComponent in the imports array
imports: [CommonModule, RouterOutlet, NavbarComponent],
```

Now, to actually implement your component into your webpage, in `src/app/app.component.html`, just use the `app-navbar` selector to include your navbar component

```html
<app-navbar></app-navbar>
<!-- Other components --!>
<router-outlet></router-outlet>
```