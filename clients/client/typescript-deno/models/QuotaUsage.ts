/**
 * Ory APIs
 * Documentation for all public and administrative Ory APIs. Administrative APIs can only be accessed with a valid Personal Access Token. Public APIs are mostly used in browsers. 
 *
 * OpenAPI spec version: v1.1.39
 * Contact: support@ory.sh
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http.ts';

export class QuotaUsage {
    'additional_price': number;
    'can_use_more': boolean;
    /**
    *  region_eu RegionEU region_us RegionUS region_apac RegionAPAC region_global RegionGlobal production_projects ProductionProjects daily_active_users DailyActiveUsers custom_domains CustomDomains sla SLA collaborator_seats CollaboratorSeats edge_cache EdgeCache branding_themes BrandingThemes zendesk_support ZendeskSupport project_metrics ProjectMetrics rate_limit_tier RateLimitTier session_rate_limit_tier RateLimitTierSessions
    */
    'feature': QuotaUsageFeatureEnum;
    'feature_available': boolean;
    'included': number;
    'used': number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "additional_price",
            "baseName": "additional_price",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "can_use_more",
            "baseName": "can_use_more",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "feature",
            "baseName": "feature",
            "type": "QuotaUsageFeatureEnum",
            "format": ""
        },
        {
            "name": "feature_available",
            "baseName": "feature_available",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "included",
            "baseName": "included",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "used",
            "baseName": "used",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return QuotaUsage.attributeTypeMap;
    }

    public constructor() {
    }
}


export type QuotaUsageFeatureEnum = "region_eu" | "region_us" | "region_apac" | "region_global" | "production_projects" | "daily_active_users" | "custom_domains" | "sla" | "collaborator_seats" | "edge_cache" | "branding_themes" | "zendesk_support" | "project_metrics" | "rate_limit_tier" | "session_rate_limit_tier" ;

