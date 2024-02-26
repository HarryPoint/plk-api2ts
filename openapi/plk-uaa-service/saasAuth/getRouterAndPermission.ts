import { http } from '@/api/http';

/**
* @link http://47.108.139.107:18100/doc.html#/default/Saas授权相关/getRouterAndPermissionUsingPOST_1
*/
export default function fetchMethod(options: { data: IEnterpriseRoutingTreeQueryDTO1 }, extraOptions?: any) {
    return http<IJSONResultRoutePermissionResponseDTO>(
        {
            url: "/plk-uaa-service/saasAuth/getRouterAndPermission",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 企业路由树查询 DTO_1 */
export interface IEnterpriseRoutingTreeQueryDTO1 {
    /** 客户端组编码 */
    clientGroupCode?: string;
    /** 最大级别(包含) */
    maxLevel?: number;
    /** 权限码集合 */
    permissionCodeSet?: string[];
    /** 查询模式 */
    queryModel?: ('QUICK' | 'PRECISE');
    /** 父级路由code */
    parentRouterCode?: string;
    /** 应用级别 */
    applicationLevel?: ('PROJECT_MANAGER' | 'ENTERPRISE');
    /** 服务对象ID */
    serviceObjectId?: number;
}
/** JSONResult«路由权限响应 DTO» */
export interface IJSONResultRoutePermissionResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheRoutePermissionRespondsToTheDTO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 路由权限响应 DTO */
export interface ITheRoutePermissionRespondsToTheDTO {
    /** 路由集 */
    routerList?: ITheUserRoutingTreeRespondsToTheDTO[];
    /** 权限码集 */
    permissionCodeList?: string[];
}
/** 用户路由树响应 DTO */
export interface ITheUserRoutingTreeRespondsToTheDTO {
    /** id */
    id?: number;
    /** 企业id */
    enterpriseId?: number;
    /** 路由id */
    routerId?: number;
    /** 是否系统路由 */
    isSystem?: ('Y' | 'N');
    /** 客户端组编码 */
    clientGroupCode?: string;
    /** 所属权限编码 */
    permissionCode?: string;
    /** 父级路由id */
    parentId?: number;
    /** 父级路由编码 */
    parentCode?: string;
    /** 路由name */
    name?: string;
    /** 路由code */
    code?: string;
    /** 菜单类型 */
    type?: ('GROUP' | 'PAGE');
    /** 图标 */
    icon?: string;
    /** 级别 */
    level?: number;
    /** 路由排序 */
    sort?: number;
    /** 是否存在数据权限 */
    hasDataAuth?: ('Y' | 'N');
    /** 配置 */
    config?: ITheEnterpriseRouteConfigurationRespondsToTheDTO;
    /** 当前用户是否收藏 */
    isFavorite?: ('Y' | 'N');
    /** 子集 */
    children?: ITheUserRoutingTreeRespondsToTheDTO[];
}
/** 企业路由配置响应 DTO */
export interface ITheEnterpriseRouteConfigurationRespondsToTheDTO {
    /** 菜单类型 */
    menuType?: ('APP' | 'REPORT_EXTERNAL');
    /** 应用配置 */
    appConfig?: ITheEnterpriseApplicationRouteConfigurationRespondsToTheDTO;
    /** 外部报表配置 */
    rpExtConfig?: ITheEnterpriseApplicationRouteConfigurationRespondsToDTO1;
    /** 应用对应的组织字段列表 */
    appOrganizationFiledList?: ITheEnterpriseRouteApplicationFieldRespondsToTheDTO[];
}
/** 企业应用路由配置响应 DTO */
export interface ITheEnterpriseApplicationRouteConfigurationRespondsToTheDTO {
    /** 系统应用类型 */
    appSystemType?: ('STOREHOUSE' | 'WAREHOUSE' | 'PRODUCE_ORDER' | 'ANDON' | 'EMPLOYEE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'AREA' | 'CUSTOMER' | 'ROUTING' | 'MATERIAL' | 'MATERIAL_BOM' | 'PROCESS' | 'POSITION' | 'BANK' | 'UNIT' | 'WAREHOUSE_MATERIAL_RP' | 'MOLD' | 'ALLOCATION_TYPE' | 'IN_STORAGE_TYPE' | 'OUT_STORAGE_TYPE' | 'OTHER_IN_STORAGE_ORDER' | 'OTHER_OUT_STORAGE_ORDER' | 'ALLOCATION_ORDER' | 'INVENTORY_LOSSES_ORDER' | 'INVENTORY_PROFIT_ORDER' | 'DEVICE' | 'DEVICE_TYPE' | 'DEVICE_PARTS' | 'DEVICE_EMPLOYEE_CAPACITY' | 'DEVICE_MAINTAIN_SCHEME' | 'DEVICE_MAINTAIN_PLAN' | 'DEVICE_MAINTAIN_TASK' | 'PRODUCTION_LINE' | 'SALES_PLAN' | 'QUOTE_BILL' | 'FOLLOW_RECORD' | 'FOLLOW_PLAN' | 'DAILY_WORK' | 'CONTRACT' | 'BUSINESS_CHANCE' | 'CUSTOMER_TRANSFER' | 'RECEIPT' | 'USER' | 'IMPROVEMENT_CATEGORY' | 'PROPOSAL' | 'KAIZEN_PROJECT_TASK' | 'KAIZEN_PROJECT' | 'PROPOSAL_SCORE' | 'DEPARTMENT_YEAR_TARGET_SETTING' | 'SUPPLIER' | 'PURCHASE_ORDER' | 'PAYMENT_ACCOUNT' | 'PURCHASE_IN_ORDER' | 'PURCHASE_RETURN_ORDER' | 'PAYMENT_ORDER' | 'PAYMENT_RETURN_ORDER' | 'PREPAID_ORDER' | 'SALES_ORDER' | 'SALES_OUT_STORAGE_ORDER' | 'SALES_RETURN_ORDER' | 'RECEIVABLE_ORDER' | 'RECEIVABLE_RETURN_ORDER' | 'PRE_RECEIVABLE_ORDER' | 'PRODUCTION_MATERIAL_ISSUANCE_ORDER' | 'PRODUCTION_MATERIAL_RETURN_ORDER' | 'PRODUCTION_STOCK_IN_ORDER' | 'PRODUCTION_STOCK_RETURN_ORDER' | 'PRODUCE_FEE_TYPE' | 'PRODUCE_FEE_COLLECT' | 'PROJECT' | 'PROJECT_TYPE' | 'PROJECT_RISK_TYPE' | 'PROJECT_RISK_FLAG' | 'PROJECT_PLAN' | 'PROJECT_STAGE' | 'PROJECT_TASK' | 'PROJECT_TASK_REVIEW' | 'PROJECT_TASK_DECISION' | 'PROJECT_TASK_TYPE' | 'PROJECT_MEMBER' | 'PROJECT_ROLE' | 'PROJECT_RISK' | 'PROJECT_FEE' | 'PROJECT_QUALITY_ISSUE' | 'PROJECT_QUALITY_TARGET' | 'PROJECT_MEETING_SUMMARY' | 'PROJECT_ACTION_ITEM' | 'PROJECT_LEADER_INSTRUCT' | 'PROJECT_MEMORABILIA' | 'PROJECT_BRIEF_REPORT' | 'PROJECT_MODIFICATION' | 'PROJECT_PLAN_MODIFICATION' | 'PROJECT_MEMBER_MODIFICATION' | 'QMS_ANNUAL_QUALITY_TARGET' | 'QMS_QUALITY_WORK_PLAN' | 'QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT' | 'QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_INTERNAL_AUDIT_REPORT' | 'QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_TARGET_ITEM' | 'QMS_REGULATION_NO_AND_CONTENT' | 'QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_EXTERNAL_AUDIT_REPORT' | 'QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS' | 'QMS_SPECIAL_AUDIT_REPORT' | 'QMS_MANAGEMENT_REVIEW_PLAN' | 'QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL' | 'QMS_MANAGEMENT_REVIEW_REPORT' | 'QMS_INSPECTION_CATEGORY' | 'QMS_INSPECTION_METHOD' | 'QMS_SAMPLING_STANDARDS' | 'QMS_INSPECTION_ITEMS' | 'QMS_INSPECTION_SCHEME' | 'QMS_INCOMING_INSPECTION_APPLY_FORM' | 'QMS_INCOMING_INSPECTION_TASK' | 'QMS_INCOMING_INSPECTION_REPORT' | 'QMS_FIRST_INSPECTION_APPLY_FORM' | 'QMS_FIRST_INSPECTION_TASK' | 'QMS_FIRST_INSPECTION_REPORT' | 'QMS_PROCESS_INSPECTION_APPLY_FORM' | 'QMS_PROCESS_INSPECTION_TASK' | 'QMS_PROCESS_INSPECTION_REPORT' | 'QMS_PRODUCT_INSPECTION_APPLY_FORM' | 'QMS_PRODUCT_INSPECTION_TASK' | 'QMS_PRODUCT_INSPECTION_REPORT' | 'QMS_SHIPMENT_INSPECTION_APPLY_FORM' | 'QMS_SHIPMENT_INSPECTION_TASK' | 'QMS_SHIPMENT_INSPECTION_REPORT' | 'QMS_QUALITY_PERSONNEL' | 'QMS_REASON_OF_NON_CONFORMANCE' | 'QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT' | 'QMS_HANDLING_OF_INCOMING_NON_CONFORMING' | 'QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING' | 'QMS_HANDLE_PRODUCT_NON_CONFORMING' | 'QMS_QUALITY_ISSUE_INFORMATION_REPORT' | 'QMS_QUALITY_PROBLEM_ANALYSIS_REPORT' | 'QMS_QUALITY_CORRECTIVE_ACTION_REPORT' | 'QMS_8D_REPORT' | 'QMS_TECHNICAL_ZEROING_REPORT' | 'QMS_MANAGE_ZEROING_REPORT' | 'QMS_FRACAS_REPORT' | 'QMS_IMPROVEMENT_PROJECT' | 'QMS_HANDLE_FIRST_INSPECT_DEFECTS' | 'QMS_HANDLE_PROCESS_INSPECT_DEFECTS' | 'QMS_HANDLE_PATROL_INSPECT_DEFECTS' | 'QMS_ADVANCE_TEAM_DECLARE' | 'QMS_ADVANCE_PERSONNEL_DECLARE' | 'QMS_QUALITY_MONTH_REPORT_FILL' | 'QMS_SEAL_STYLE' | 'QMS_SEAL_APPLY_FOR_RECEIVING' | 'QMS_SEAL_APPLY_FOR_REPORT_LOSS' | 'QMS_SEAL_LEDGER' | 'QMS_SEAL_APPLY_FOR_CANCELLATION' | 'QMS_SEAL_APPLY_FOR_REPLACEMENT' | 'QMS_PATROL_INSPECTION_PLAN' | 'QMS_PATROL_INSPECTION_TASK' | 'QMS_PATROL_INSPECTION_REPORT' | 'FILE_CATEGORY' | 'FILE_OBJECT');
    /** 应用id */
    appId?: number;
}
/** 企业应用路由配置响应 DTO_1 */
export interface ITheEnterpriseApplicationRouteConfigurationRespondsToDTO1 {
    /** 外部报表id */
    extReportId?: number;
    /** 链接地址 */
    link?: string;
    /** 展示方式 */
    displayMode?: ('EMBED_PAGE' | 'SINGLE_PAGE');
}
/** 企业路由应用字段响应 DTO */
export interface ITheEnterpriseRouteApplicationFieldRespondsToTheDTO {
    /** 应用字段序列号 */
    appFieldSerialNo?: string;
    /** 应用字段名 */
    appFieldName?: string;
    /** 应用字段编码 */
    appFieldCode?: string;
    /** 应用字段排序 */
    appFieldSort?: number;
    /** 应用字段类型 */
    appFieldType?: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
    /** 是否是表格内字段 */
    isTableField?: ('Y' | 'N');
    /** 父级流程表单编码 */
    parentFlowPathFormFieldCode?: string;
}
