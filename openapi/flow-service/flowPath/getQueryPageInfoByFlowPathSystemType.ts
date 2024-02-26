import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/getQueryPageInfoByFlowPathSystemTypeUsingGET
*/
export default function fetchMethod(options: { data: IProcessDataSearchVOparams: { enterpriseId?: number; systemType?: EsystemType, extraOptions?: any) {
    return http<IJSONResultDynamicDataQueryPageVO>(
        {
            url: "/flow-service/flowPath/getQueryPageInfoByFlowPathSystemType",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** 流程数据搜索VO */
export interface IProcessDataSearchVO {
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
    searchType: EProcessDataDetailsSearchVO_searchType;
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
    isAsc?: EPagingSortVO_isAsc;
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
    cascadeFormData?: EFormDataGroupingDTO_cascadeFormData;
    /** 多级基础数据上级ID */
    treeDataParentId?: number;
}
/** JSONResult«DynamicDataQueryPageVO» */
export interface IJSONResultDynamicDataQueryPageVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IDynamicDataQueryPageVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** DynamicDataQueryPageVO */
export interface IDynamicDataQueryPageVO {
    /** undefined */
    flowPath?: IFlowPathBaseVO;
    /** undefined */
    masterTableColumns?: IFlowPathTableColumnBaseVO[];
    /** undefined */
    childTableColumns?: IFlowPathTableColumnBaseVO[];
}
/** FlowPathBaseVO */
export interface IFlowPathBaseVO {
    /** undefined */
    id?: number;
    /** undefined */
    code?: string;
    /** undefined */
    lastName?: string;
    /** undefined */
    type?: EFlowPathBaseVO_type;
}
/** FlowPathTableColumnBaseVO */
export interface IFlowPathTableColumnBaseVO {
    /** undefined */
    id?: number;
    /** undefined */
    code?: string;
    /** undefined */
    isTableField?: EFlowPathTableColumnBaseVO_isTableField;
    /** undefined */
    formFieldType?: EFlowPathTableColumnBaseVO_formFieldType;
    /** undefined */
    formFieldTypeGroup?: EFlowPathTableColumnBaseVO_formFieldTypeGroup;
    /** undefined */
    parentFlowPathFormFieldCode?: string;
    /** undefined */
    numberRuleDetails?: INumberRuleDetailBaseVO[];
    /** undefined */
    flowPathFormFieldId?: number;
    /** undefined */
    formRpCode?: string;
    /** undefined */
    formDetailRpCode?: string;
    /** undefined */
    formRpSelectorShowFieldCode?: string;
    /** undefined */
    formRpSelectorShowFieldSerialNo?: string;
    /** undefined */
    actualFields?: Record<string, any>[];
    /** undefined */
    isAutoGetLocation?: EFlowPathTableColumnBaseVO_isAutoGetLocation;
    /** undefined */
    addressType?: EFlowPathTableColumnBaseVO_addressType;
    /** undefined */
    numberFormat?: EFlowPathTableColumnBaseVO_numberFormat;
    /** undefined */
    dynamicControlValueFieldSerialNo?: string;
    /** undefined */
    processorShowFieldSerialNo?: string;
    /** undefined */
    processorShowFieldCode?: string;
    /** undefined */
    organizationType?: EFlowPathTableColumnBaseVO_organizationType;
}
/** NumberRuleDetailBaseVO */
export interface INumberRuleDetailBaseVO {
    /** undefined */
    type?: ENumberRuleDetailBaseVO_type;
    /** undefined */
    dateFormat?: ENumberRuleDetailBaseVO_dateFormat;
    /** undefined */
    fixValue?: string;
    /** undefined */
    ruleLength?: number;
    /** undefined */
    startValue?: number;
    /** undefined */
    stepValue?: number;
    /** undefined */
    isCodeAccording?: ENumberRuleDetailBaseVO_isCodeAccording;
    /** undefined */
    flowPathFormFieldCodeNumberRuleId?: number;
}

export enum EsystemType {
    STOREHOUSE = "STOREHOUSE",
    WAREHOUSE = "WAREHOUSE",
    PRODUCE_ORDER = "PRODUCE_ORDER",
    ANDON = "ANDON",
    EMPLOYEE = "EMPLOYEE",
    DEPARTMENT = "DEPARTMENT",
    CLASS_GROUP = "CLASS_GROUP",
    AREA = "AREA",
    CUSTOMER = "CUSTOMER",
    ROUTING = "ROUTING",
    MATERIAL = "MATERIAL",
    MATERIAL_BOM = "MATERIAL_BOM",
    PROCESS = "PROCESS",
    POSITION = "POSITION",
    BANK = "BANK",
    UNIT = "UNIT",
    WAREHOUSE_MATERIAL_RP = "WAREHOUSE_MATERIAL_RP",
    MOLD = "MOLD",
    ALLOCATION_TYPE = "ALLOCATION_TYPE",
    IN_STORAGE_TYPE = "IN_STORAGE_TYPE",
    OUT_STORAGE_TYPE = "OUT_STORAGE_TYPE",
    OTHER_IN_STORAGE_ORDER = "OTHER_IN_STORAGE_ORDER",
    OTHER_OUT_STORAGE_ORDER = "OTHER_OUT_STORAGE_ORDER",
    ALLOCATION_ORDER = "ALLOCATION_ORDER",
    INVENTORY_LOSSES_ORDER = "INVENTORY_LOSSES_ORDER",
    INVENTORY_PROFIT_ORDER = "INVENTORY_PROFIT_ORDER",
    DEVICE = "DEVICE",
    DEVICE_TYPE = "DEVICE_TYPE",
    DEVICE_PARTS = "DEVICE_PARTS",
    DEVICE_EMPLOYEE_CAPACITY = "DEVICE_EMPLOYEE_CAPACITY",
    DEVICE_MAINTAIN_SCHEME = "DEVICE_MAINTAIN_SCHEME",
    DEVICE_MAINTAIN_PLAN = "DEVICE_MAINTAIN_PLAN",
    DEVICE_MAINTAIN_TASK = "DEVICE_MAINTAIN_TASK",
    PRODUCTION_LINE = "PRODUCTION_LINE",
    SALES_PLAN = "SALES_PLAN",
    QUOTE_BILL = "QUOTE_BILL",
    FOLLOW_RECORD = "FOLLOW_RECORD",
    FOLLOW_PLAN = "FOLLOW_PLAN",
    DAILY_WORK = "DAILY_WORK",
    CONTRACT = "CONTRACT",
    BUSINESS_CHANCE = "BUSINESS_CHANCE",
    CUSTOMER_TRANSFER = "CUSTOMER_TRANSFER",
    RECEIPT = "RECEIPT",
    USER = "USER",
    IMPROVEMENT_CATEGORY = "IMPROVEMENT_CATEGORY",
    PROPOSAL = "PROPOSAL",
    KAIZEN_PROJECT_TASK = "KAIZEN_PROJECT_TASK",
    KAIZEN_PROJECT = "KAIZEN_PROJECT",
    PROPOSAL_SCORE = "PROPOSAL_SCORE",
    DEPARTMENT_YEAR_TARGET_SETTING = "DEPARTMENT_YEAR_TARGET_SETTING",
    SUPPLIER = "SUPPLIER",
    PURCHASE_ORDER = "PURCHASE_ORDER",
    PAYMENT_ACCOUNT = "PAYMENT_ACCOUNT",
    PURCHASE_IN_ORDER = "PURCHASE_IN_ORDER",
    PURCHASE_RETURN_ORDER = "PURCHASE_RETURN_ORDER",
    PAYMENT_ORDER = "PAYMENT_ORDER",
    PAYMENT_RETURN_ORDER = "PAYMENT_RETURN_ORDER",
    PREPAID_ORDER = "PREPAID_ORDER",
    SALES_ORDER = "SALES_ORDER",
    SALES_OUT_STORAGE_ORDER = "SALES_OUT_STORAGE_ORDER",
    SALES_RETURN_ORDER = "SALES_RETURN_ORDER",
    RECEIVABLE_ORDER = "RECEIVABLE_ORDER",
    RECEIVABLE_RETURN_ORDER = "RECEIVABLE_RETURN_ORDER",
    PRE_RECEIVABLE_ORDER = "PRE_RECEIVABLE_ORDER",
    PRODUCTION_MATERIAL_ISSUANCE_ORDER = "PRODUCTION_MATERIAL_ISSUANCE_ORDER",
    PRODUCTION_MATERIAL_RETURN_ORDER = "PRODUCTION_MATERIAL_RETURN_ORDER",
    PRODUCTION_STOCK_IN_ORDER = "PRODUCTION_STOCK_IN_ORDER",
    PRODUCTION_STOCK_RETURN_ORDER = "PRODUCTION_STOCK_RETURN_ORDER",
    PRODUCE_FEE_TYPE = "PRODUCE_FEE_TYPE",
    PRODUCE_FEE_COLLECT = "PRODUCE_FEE_COLLECT",
    PROJECT = "PROJECT",
    PROJECT_TYPE = "PROJECT_TYPE",
    PROJECT_RISK_TYPE = "PROJECT_RISK_TYPE",
    PROJECT_RISK_FLAG = "PROJECT_RISK_FLAG",
    PROJECT_PLAN = "PROJECT_PLAN",
    PROJECT_STAGE = "PROJECT_STAGE",
    PROJECT_TASK = "PROJECT_TASK",
    PROJECT_TASK_REVIEW = "PROJECT_TASK_REVIEW",
    PROJECT_TASK_DECISION = "PROJECT_TASK_DECISION",
    PROJECT_TASK_TYPE = "PROJECT_TASK_TYPE",
    PROJECT_MEMBER = "PROJECT_MEMBER",
    PROJECT_ROLE = "PROJECT_ROLE",
    PROJECT_RISK = "PROJECT_RISK",
    PROJECT_FEE = "PROJECT_FEE",
    PROJECT_QUALITY_ISSUE = "PROJECT_QUALITY_ISSUE",
    PROJECT_QUALITY_TARGET = "PROJECT_QUALITY_TARGET",
    PROJECT_MEETING_SUMMARY = "PROJECT_MEETING_SUMMARY",
    PROJECT_ACTION_ITEM = "PROJECT_ACTION_ITEM",
    PROJECT_LEADER_INSTRUCT = "PROJECT_LEADER_INSTRUCT",
    PROJECT_MEMORABILIA = "PROJECT_MEMORABILIA",
    PROJECT_BRIEF_REPORT = "PROJECT_BRIEF_REPORT",
    PROJECT_MODIFICATION = "PROJECT_MODIFICATION",
    PROJECT_PLAN_MODIFICATION = "PROJECT_PLAN_MODIFICATION",
    PROJECT_MEMBER_MODIFICATION = "PROJECT_MEMBER_MODIFICATION",
    QMS_ANNUAL_QUALITY_TARGET = "QMS_ANNUAL_QUALITY_TARGET",
    QMS_QUALITY_WORK_PLAN = "QMS_QUALITY_WORK_PLAN",
    QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT = "QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT",
    QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN",
    QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS = "QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS",
    QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT",
    QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS = "QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS",
    QMS_INTERNAL_AUDIT_REPORT = "QMS_INTERNAL_AUDIT_REPORT",
    QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    QMS_TARGET_ITEM = "QMS_TARGET_ITEM",
    QMS_REGULATION_NO_AND_CONTENT = "QMS_REGULATION_NO_AND_CONTENT",
    QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN",
    QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT",
    QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS = "QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS",
    QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    QMS_EXTERNAL_AUDIT_REPORT = "QMS_EXTERNAL_AUDIT_REPORT",
    QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN = "QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN",
    QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS = "QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS",
    QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT = "QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT",
    QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE = "QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE",
    QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS = "QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS",
    QMS_SPECIAL_AUDIT_REPORT = "QMS_SPECIAL_AUDIT_REPORT",
    QMS_MANAGEMENT_REVIEW_PLAN = "QMS_MANAGEMENT_REVIEW_PLAN",
    QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL = "QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL",
    QMS_MANAGEMENT_REVIEW_REPORT = "QMS_MANAGEMENT_REVIEW_REPORT",
    QMS_INSPECTION_CATEGORY = "QMS_INSPECTION_CATEGORY",
    QMS_INSPECTION_METHOD = "QMS_INSPECTION_METHOD",
    QMS_SAMPLING_STANDARDS = "QMS_SAMPLING_STANDARDS",
    QMS_INSPECTION_ITEMS = "QMS_INSPECTION_ITEMS",
    QMS_INSPECTION_SCHEME = "QMS_INSPECTION_SCHEME",
    QMS_INCOMING_INSPECTION_APPLY_FORM = "QMS_INCOMING_INSPECTION_APPLY_FORM",
    QMS_INCOMING_INSPECTION_TASK = "QMS_INCOMING_INSPECTION_TASK",
    QMS_INCOMING_INSPECTION_REPORT = "QMS_INCOMING_INSPECTION_REPORT",
    QMS_FIRST_INSPECTION_APPLY_FORM = "QMS_FIRST_INSPECTION_APPLY_FORM",
    QMS_FIRST_INSPECTION_TASK = "QMS_FIRST_INSPECTION_TASK",
    QMS_FIRST_INSPECTION_REPORT = "QMS_FIRST_INSPECTION_REPORT",
    QMS_PROCESS_INSPECTION_APPLY_FORM = "QMS_PROCESS_INSPECTION_APPLY_FORM",
    QMS_PROCESS_INSPECTION_TASK = "QMS_PROCESS_INSPECTION_TASK",
    QMS_PROCESS_INSPECTION_REPORT = "QMS_PROCESS_INSPECTION_REPORT",
    QMS_PRODUCT_INSPECTION_APPLY_FORM = "QMS_PRODUCT_INSPECTION_APPLY_FORM",
    QMS_PRODUCT_INSPECTION_TASK = "QMS_PRODUCT_INSPECTION_TASK",
    QMS_PRODUCT_INSPECTION_REPORT = "QMS_PRODUCT_INSPECTION_REPORT",
    QMS_SHIPMENT_INSPECTION_APPLY_FORM = "QMS_SHIPMENT_INSPECTION_APPLY_FORM",
    QMS_SHIPMENT_INSPECTION_TASK = "QMS_SHIPMENT_INSPECTION_TASK",
    QMS_SHIPMENT_INSPECTION_REPORT = "QMS_SHIPMENT_INSPECTION_REPORT",
    QMS_QUALITY_PERSONNEL = "QMS_QUALITY_PERSONNEL",
    QMS_REASON_OF_NON_CONFORMANCE = "QMS_REASON_OF_NON_CONFORMANCE",
    QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT = "QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT",
    QMS_HANDLING_OF_INCOMING_NON_CONFORMING = "QMS_HANDLING_OF_INCOMING_NON_CONFORMING",
    QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING = "QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING",
    QMS_HANDLE_PRODUCT_NON_CONFORMING = "QMS_HANDLE_PRODUCT_NON_CONFORMING",
    QMS_QUALITY_ISSUE_INFORMATION_REPORT = "QMS_QUALITY_ISSUE_INFORMATION_REPORT",
    QMS_QUALITY_PROBLEM_ANALYSIS_REPORT = "QMS_QUALITY_PROBLEM_ANALYSIS_REPORT",
    QMS_QUALITY_CORRECTIVE_ACTION_REPORT = "QMS_QUALITY_CORRECTIVE_ACTION_REPORT",
    QMS_8D_REPORT = "QMS_8D_REPORT",
    QMS_TECHNICAL_ZEROING_REPORT = "QMS_TECHNICAL_ZEROING_REPORT",
    QMS_MANAGE_ZEROING_REPORT = "QMS_MANAGE_ZEROING_REPORT",
    QMS_FRACAS_REPORT = "QMS_FRACAS_REPORT",
    QMS_IMPROVEMENT_PROJECT = "QMS_IMPROVEMENT_PROJECT",
    QMS_HANDLE_FIRST_INSPECT_DEFECTS = "QMS_HANDLE_FIRST_INSPECT_DEFECTS",
    QMS_HANDLE_PROCESS_INSPECT_DEFECTS = "QMS_HANDLE_PROCESS_INSPECT_DEFECTS",
    QMS_HANDLE_PATROL_INSPECT_DEFECTS = "QMS_HANDLE_PATROL_INSPECT_DEFECTS",
    QMS_ADVANCE_TEAM_DECLARE = "QMS_ADVANCE_TEAM_DECLARE",
    QMS_ADVANCE_PERSONNEL_DECLARE = "QMS_ADVANCE_PERSONNEL_DECLARE",
    QMS_QUALITY_MONTH_REPORT_FILL = "QMS_QUALITY_MONTH_REPORT_FILL",
    QMS_SEAL_STYLE = "QMS_SEAL_STYLE",
    QMS_SEAL_APPLY_FOR_RECEIVING = "QMS_SEAL_APPLY_FOR_RECEIVING",
    QMS_SEAL_APPLY_FOR_REPORT_LOSS = "QMS_SEAL_APPLY_FOR_REPORT_LOSS",
    QMS_SEAL_LEDGER = "QMS_SEAL_LEDGER",
    QMS_SEAL_APPLY_FOR_CANCELLATION = "QMS_SEAL_APPLY_FOR_CANCELLATION",
    QMS_SEAL_APPLY_FOR_REPLACEMENT = "QMS_SEAL_APPLY_FOR_REPLACEMENT",
    QMS_PATROL_INSPECTION_PLAN = "QMS_PATROL_INSPECTION_PLAN",
    QMS_PATROL_INSPECTION_TASK = "QMS_PATROL_INSPECTION_TASK",
    QMS_PATROL_INSPECTION_REPORT = "QMS_PATROL_INSPECTION_REPORT",
    FILE_CATEGORY = "FILE_CATEGORY",
    FILE_OBJECT = "FILE_OBJECT"
}

export enum EProcessDataDetailsSearchVO_searchType {
    NONE = "NONE",
    EQ = "EQ",
    LIKE = "LIKE",
    RANGE = "RANGE",
    SELECTOR = "SELECTOR",
    IS_NULL = "IS_NULL",
    NOT_NULL = "NOT_NULL",
    NE = "NE",
    REGEXP = "REGEXP"
}

export enum EPagingSortVO_isAsc {
    Y = "Y",
    N = "N"
}

export enum EFormDataGroupingDTO_cascadeFormData {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFlowPathBaseVO_type {
    BILL = "BILL",
    DATA = "DATA",
    TREE_DATA = "TREE_DATA",
    PAGE = "PAGE"
}

export enum EFlowPathTableColumnBaseVO_isTableField {
    Y = "Y",
    N = "N"
}

export enum EFlowPathTableColumnBaseVO_formFieldType {
    INPUT_TEXT = "INPUT_TEXT",
    TEXTAREA = "TEXTAREA",
    NUMBER = "NUMBER",
    DATE = "DATE",
    SELECTOR = "SELECTOR",
    CHECKBOX = "CHECKBOX",
    IMAGE_UPLOAD = "IMAGE_UPLOAD",
    FILE_UPLOAD = "FILE_UPLOAD",
    TABLE = "TABLE",
    FORM_RP = "FORM_RP",
    FORM_RP_MULTI = "FORM_RP_MULTI",
    CODE = "CODE",
    ADDRESS = "ADDRESS",
    POSITION = "POSITION",
    EMAIL = "EMAIL",
    MOBILE = "MOBILE",
    ID_CARD = "ID_CARD",
    RICH_TEXT = "RICH_TEXT",
    ASSOCIATION_QUERY = "ASSOCIATION_QUERY",
    DESC_TEXT = "DESC_TEXT",
    SPLIT_LINE = "SPLIT_LINE",
    LOT_NO = "LOT_NO",
    SERIAL_NO = "SERIAL_NO",
    FORMULA = "FORMULA"
}

export enum EFlowPathTableColumnBaseVO_formFieldTypeGroup {
    FORM = "FORM",
    STYLE = "STYLE"
}

export enum EFlowPathTableColumnBaseVO_isAutoGetLocation {
    Y = "Y",
    N = "N"
}

export enum EFlowPathTableColumnBaseVO_addressType {
    REGION_AND_DETAIL_ADDRESS = "REGION_AND_DETAIL_ADDRESS",
    REGION = "REGION",
    STREET_AND_DETAIL_ADDRESS = "STREET_AND_DETAIL_ADDRESS",
    STREET = "STREET"
}

export enum EFlowPathTableColumnBaseVO_numberFormat {
    F1 = "F1",
    F2 = "F2",
    F3 = "F3",
    F4 = "F4"
}

export enum EFlowPathTableColumnBaseVO_organizationType {
    NONE = "NONE",
    CLASS_GROUP = "CLASS_GROUP",
    DEPARTMENT = "DEPARTMENT",
    USER = "USER",
    PROCESSOR = "PROCESSOR"
}

export enum ENumberRuleDetailBaseVO_type {
    FIXED = "FIXED",
    DATE = "DATE",
    AUTO_NUMBER = "AUTO_NUMBER",
    FLOW_PATH_FIELD = "FLOW_PATH_FIELD",
    ID36 = "ID36"
}

export enum ENumberRuleDetailBaseVO_dateFormat {
    YEAR = "YEAR",
    YEAR_MONTH = "YEAR_MONTH",
    YEAR_MONTH_DAY = "YEAR_MONTH_DAY",
    MONTH = "MONTH",
    MONTH_DAY = "MONTH_DAY",
    DAY = "DAY"
}

export enum ENumberRuleDetailBaseVO_isCodeAccording {
    Y = "Y",
    N = "N"
}
