import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/动态数据相关/getRemovedPageByFlowPathSystemTypeUsingPOST
*/
export default function fetchMethod(options: { data: IProcessDataSearchVO1params: { enterpriseId?: number; systemType?: ('STOREHOUSE' | 'WAREHOUSE' | 'PRODUCE_ORDER' | 'ANDON' | 'EMPLOYEE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'AREA' | 'CUSTOMER' | 'ROUTING' | 'MATERIAL' | 'MATERIAL_BOM' | 'PROCESS' | 'POSITION' | 'BANK' | 'UNIT' | 'WAREHOUSE_MATERIAL_RP' | 'MOLD' | 'ALLOCATION_TYPE' | 'IN_STORAGE_TYPE' | 'OUT_STORAGE_TYPE' | 'OTHER_IN_STORAGE_ORDER' | 'OTHER_OUT_STORAGE_ORDER' | 'ALLOCATION_ORDER' | 'INVENTORY_LOSSES_ORDER' | 'INVENTORY_PROFIT_ORDER' | 'DEVICE' | 'DEVICE_TYPE' | 'DEVICE_PARTS' | 'DEVICE_EMPLOYEE_CAPACITY' | 'DEVICE_MAINTAIN_SCHEME' | 'DEVICE_MAINTAIN_PLAN' | 'DEVICE_MAINTAIN_TASK' | 'PRODUCTION_LINE' | 'SALES_PLAN' | 'QUOTE_BILL' | 'FOLLOW_RECORD' | 'FOLLOW_PLAN' | 'DAILY_WORK' | 'CONTRACT' | 'BUSINESS_CHANCE' | 'CUSTOMER_TRANSFER' | 'RECEIPT' | 'USER' | 'IMPROVEMENT_CATEGORY' | 'PROPOSAL' | 'KAIZEN_PROJECT_TASK' | 'KAIZEN_PROJECT' | 'PROPOSAL_SCORE' | 'DEPARTMENT_YEAR_TARGET_SETTING' | 'SUPPLIER' | 'PURCHASE_ORDER' | 'PAYMENT_ACCOUNT' | 'PURCHASE_IN_ORDER' | 'PURCHASE_RETURN_ORDER' | 'PAYMENT_ORDER' | 'PAYMENT_RETURN_ORDER' | 'PREPAID_ORDER' | 'SALES_ORDER' | 'SALES_OUT_STORAGE_ORDER' | 'SALES_RETURN_ORDER' | 'RECEIVABLE_ORDER' | 'RECEIVABLE_RETURN_ORDER' | 'PRE_RECEIVABLE_ORDER' | 'PRODUCTION_MATERIAL_ISSUANCE_ORDER' | 'PRODUCTION_MATERIAL_RETURN_ORDER' | 'PRODUCTION_STOCK_IN_ORDER' | 'PRODUCTION_STOCK_RETURN_ORDER' | 'PRODUCE_FEE_TYPE' | 'PRODUCE_FEE_COLLECT' | 'PROJECT' | 'PROJECT_TYPE' | 'PROJECT_RISK_TYPE' | 'PROJECT_RISK_FLAG' | 'PROJECT_PLAN' | 'PROJECT_STAGE' | 'PROJECT_TASK' | 'PROJECT_TASK_REVIEW' | 'PROJECT_TASK_DECISION' | 'PROJECT_TASK_TYPE' | 'PROJECT_MEMBER' | 'PROJECT_ROLE' | 'PROJECT_RISK' | 'PROJECT_FEE' | 'PROJECT_QUALITY_ISSUE' | 'PROJECT_QUALITY_TARGET' | 'PROJECT_MEETING_SUMMARY' | 'PROJECT_ACTION_ITEM' | 'PROJECT_LEADER_INSTRUCT' | 'PROJECT_MEMORABILIA' | 'PROJECT_BRIEF_REPORT' | 'PROJECT_MODIFICATION' | 'PROJECT_PLAN_MODIFICATION' | 'PROJECT_MEMBER_MODIFICATION' | 'QMS_ANNUAL_QUALITY_TARGET' | 'QMS_QUALITY_WORK_PLAN' | 'QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT' | 'QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_INTERNAL_AUDIT_REPORT' | 'QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_TARGET_ITEM' | 'QMS_REGULATION_NO_AND_CONTENT' | 'QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_EXTERNAL_AUDIT_REPORT' | 'QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS' | 'QMS_SPECIAL_AUDIT_REPORT' | 'QMS_MANAGEMENT_REVIEW_PLAN' | 'QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL' | 'QMS_MANAGEMENT_REVIEW_REPORT' | 'QMS_INSPECTION_CATEGORY' | 'QMS_INSPECTION_METHOD' | 'QMS_SAMPLING_STANDARDS' | 'QMS_INSPECTION_ITEMS' | 'QMS_INSPECTION_SCHEME' | 'QMS_INCOMING_INSPECTION_APPLY_FORM' | 'QMS_INCOMING_INSPECTION_TASK' | 'QMS_INCOMING_INSPECTION_REPORT' | 'QMS_FIRST_INSPECTION_APPLY_FORM' | 'QMS_FIRST_INSPECTION_TASK' | 'QMS_FIRST_INSPECTION_REPORT' | 'QMS_PROCESS_INSPECTION_APPLY_FORM' | 'QMS_PROCESS_INSPECTION_TASK' | 'QMS_PROCESS_INSPECTION_REPORT' | 'QMS_PRODUCT_INSPECTION_APPLY_FORM' | 'QMS_PRODUCT_INSPECTION_TASK' | 'QMS_PRODUCT_INSPECTION_REPORT' | 'QMS_SHIPMENT_INSPECTION_APPLY_FORM' | 'QMS_SHIPMENT_INSPECTION_TASK' | 'QMS_SHIPMENT_INSPECTION_REPORT' | 'QMS_QUALITY_PERSONNEL' | 'QMS_REASON_OF_NON_CONFORMANCE' | 'QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT' | 'QMS_HANDLING_OF_INCOMING_NON_CONFORMING' | 'QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING' | 'QMS_HANDLE_PRODUCT_NON_CONFORMING' | 'QMS_QUALITY_ISSUE_INFORMATION_REPORT' | 'QMS_QUALITY_PROBLEM_ANALYSIS_REPORT' | 'QMS_QUALITY_CORRECTIVE_ACTION_REPORT' | 'QMS_8D_REPORT' | 'QMS_TECHNICAL_ZEROING_REPORT' | 'QMS_MANAGE_ZEROING_REPORT' | 'QMS_FRACAS_REPORT' | 'QMS_IMPROVEMENT_PROJECT' | 'QMS_HANDLE_FIRST_INSPECT_DEFECTS' | 'QMS_HANDLE_PROCESS_INSPECT_DEFECTS' | 'QMS_HANDLE_PATROL_INSPECT_DEFECTS' | 'QMS_ADVANCE_TEAM_DECLARE' | 'QMS_ADVANCE_PERSONNEL_DECLARE' | 'QMS_QUALITY_MONTH_REPORT_FILL' | 'QMS_SEAL_STYLE' | 'QMS_SEAL_APPLY_FOR_RECEIVING' | 'QMS_SEAL_APPLY_FOR_REPORT_LOSS' | 'QMS_SEAL_LEDGER' | 'QMS_SEAL_APPLY_FOR_CANCELLATION' | 'QMS_SEAL_APPLY_FOR_REPLACEMENT' | 'QMS_PATROL_INSPECTION_PLAN' | 'QMS_PATROL_INSPECTION_TASK' | 'QMS_PATROL_INSPECTION_REPORT' | 'FILE_CATEGORY' | 'FILE_OBJECT'), extraOptions?: any) {
    return http<IJSONResultPagingInformationJSONObject>(
        {
            url: "/masterdata-service/dynamicData/getRemovedPageByFlowPathSystemType",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程数据搜索VO_1 */
export interface IProcessDataSearchVO1 {
    /** 全局搜索 */
    allSearch?: string;
    /** 当前页面 */
    pageNo?: number;
    /** 字段搜索 */
    dataSearchList?: IProcessDataDetailsSearchVO[];
    /** 分页大小 */
    pageSize?: number;
    /** 排序字段集 */
    orders?: IPagingSortVO[];
    /** 明细表表code，传值后，将会查询明细表数据 */
    tableColumnCode?: string;
    /** 当前的表单分组 */
    currentFormDataGrouping?: IFormDataGroupingDTO;
    /** 操作员工id */
    opUserId?: number;
    /** 操作角色id集 */
    opRoleIds?: number[];
    /** 操作部门id */
    opDeptId?: number;
}
/** 流程数据明细搜索VO */
export interface IProcessDataDetailsSearchVO {
    /** 列code */
    code: string;
    /** 搜索类型 */
    searchType: ('NONE' | 'EQ' | 'LIKE' | 'RANGE' | 'SELECTOR' | 'IS_NULL' | 'NOT_NULL' | 'NE' | 'REGEXP');
    /** 搜索文本 - 针对文本搜索 */
    text?: string;
    /** 搜索起始值 - 针对范围搜索 */
    limitBegin?: Record<string, any>;
    /** 搜索结束值 - 针对范围搜索 */
    limitEnd?: Record<string, any>;
    /** 搜索选项值 - 针对选择搜索 */
    selectors?: Record<string, any>[];
    /** 表格编码 */
    tableCode?: string;
}
/** 分页排序VO */
export interface IPagingSortVO {
    /** undefined */
    column?: string;
    /** undefined */
    isAsc?: ('Y' | 'N');
}
/** 表单数据分组DTO */
export interface IFormDataGroupingDTO {
    /** 分组字段序列 */
    groupingFieldSerialNo?: string;
    /** 分组字段编码 */
    groupFieldCode?: string;
    /** 分组的值， 如果是关联表单，则是ID */
    groupingValue?: string;
    /** 分组名称 */
    groupingName?: string;
    /** 下级分组 */
    children?: IFormDataGroupingDTO[];
    /** 级联表单数据，  级联表单的上下级关系  - Y, 多字段分组关系 - N */
    cascadeFormData?: ('Y' | 'N');
    /** 多级基础数据上级ID */
    treeDataParentId?: number;
}
/** JSONResult«分页信息«JSONObject»» */
export interface IJSONResultPagingInformationJSONObject {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IPagingInformationJSONObject;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 分页信息«JSONObject» */
export interface IPagingInformationJSONObject {
    /** 当前页码 */
    pageNo?: number;
    /** 分页大小 */
    pageSize?: number;
    /** 总页数 */
    totalPage?: number;
    /** 总的记录数 */
    totalCount?: number;
    /** 分页列表 */
    list?: IJSONObject[];
    /** 最后页页码 */
    lastPage?: number;
    /** 是否有上一页 */
    hasPreviousPage?: ('Y' | 'N');
    /** 是否有下一页 */
    hasNextPage?: ('Y' | 'N');
    /** 上一页页码 */
    previousPage?: number;
    /** 下一页页码 */
    nextPage?: number;
}
/** JSONObject */
export interface IJSONObject {
}
