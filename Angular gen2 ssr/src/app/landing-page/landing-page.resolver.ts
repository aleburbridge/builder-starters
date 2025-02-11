
import type { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { fetchOneEntry, getBuilderSearchParams } from '@builder.io/sdk-angular';
import { environment } from "../../environments/environment";

export const catchAllResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot
) => {
    const urlPath = route.routeConfig?.path || '/';

  const searchParams = getBuilderSearchParams(route.queryParams);

  return fetchOneEntry({
    apiKey: environment.apiKey,
    model: 'page',
    userAttributes: {
      urlPath,
    },
    options: searchParams,
  });
};

