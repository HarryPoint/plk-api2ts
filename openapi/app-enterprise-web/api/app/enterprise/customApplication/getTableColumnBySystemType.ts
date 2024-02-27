import { http } from "@/api/http";

/**
* @link http://47.108.139.107:16400/doc.html#/default/自定义应用相关/getTableColumnBySystemTypeUsingGET
*/
export default function fetchMethod(options: { params: { flowPathSystemType?: EflowPathSystemType } }, extraOptions?: any) {
    return http<IJSONResultListProcessTableColumnVO>(
        {
            url: "/app-enterprise-web/api/app/enterprise/customApplication/getTableColumnBySystemType",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程表格列VO»» */
export interface IJSONResultListProcessTableColumnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessTableListsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 流程表格列VO */
export interface ITheProcessTableListsVO {
    /** id */
    id?: string;
    /** 企业id */
    enterpriseId?: string;
    /** 流程id */
    flowPathId?: string;
    /** 流程版本id - 只有根据版本ID查询才有。如果为空，则默认就是最新版本 */
    flowPathVersionId?: string;
    /** 列类型 */
    type?: ETheProcessTableListsVO_type;
    /** 列code */
    code?: string;
    /** 列名称 */
    name?: string;
    /** 流程表单id */
    flowPathFormFieldId?: string;
    /** 表单类型分组 */
    formFieldTypeGroup?: ETheProcessTableListsVO_formFieldTypeGroup;
    /** 表单类型 */
    formFieldType?: ETheProcessTableListsVO_formFieldType;
    /** 表格类型 */
    flowPathFormFieldTableType?: ETheProcessTableListsVO_flowPathFormFieldTableType;
    /** 表格内字段集 */
    tableCustomFormFields?: ITheProcessTableListsVO[];
    /** 编码字段编码规则集 */
    numberRuleDetails?: IProcessFormFieldEncodingRuleDetailsVO[];
    /** 选项集 */
    selectorList?: IFormFieldOption[];
    /** 序号值 */
    serialNo?: string;
    /** 定位类型 */
    fixType?: ETheProcessTableListsVO_fixType;
    /** 定位类型排序 */
    fixSort?: number;
    /** 是否显示，控制配置表单是否显示 */
    isShow?: ETheProcessTableListsVO_isShow;
    /** 能否查询，控制查询条件是否可勾选 */
    canQuery?: ETheProcessTableListsVO_canQuery;
    /** 排序 - 每个定位类型独立排序 */
    sort?: number;
    /** 日期类型 */
    dateType?: ETheProcessTableListsVO_dateType;
    /** 是否表格字段 */
    isTableField?: ETheProcessTableListsVO_isTableField;
    /** 父级流程表单id */
    parentFlowPathFormFieldId?: string;
    /** 父级流程表单code */
    parentFlowPathFormFieldCode?: string;
    /** 组织类型 */
    organizationType?: ETheProcessTableListsVO_organizationType;
    /** 实际存储数据字段列表 --- 数据格式[{"code":"字段编码", "name":"字段名称", "addressFieldCode" : "地址字段编码", "addressFieldSerialNo": "地址字段序列号"}] */
    actualFields?: Record<string, any>[];
    /** 地址类型 */
    addressType?: ETheProcessTableListsVO_addressType;
    /** 是否使用有账号的员工 */
    isUseEmployeesWithAccounts?: ETheProcessTableListsVO_isUseEmployeesWithAccounts;
    /** 关联表单code */
    formRpCode?: string;
    /** 关联详细表单编码 */
    formDetailRpCode?: string;
    /** 数值格式 */
    numberFormat?: ETheProcessTableListsVO_numberFormat;
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段Serial No */
    formRpSelectorShowFieldSerialNo?: string;
    /** 关联表单展示code集合 */
    formRpShowFields?: Record<string, any>[];
    /** 关联表单多选分组字段code集合 */
    formRpMultiGroupFields?: Record<string, any>[];
    /** 选择框样式 */
    style?: ETheProcessTableListsVO_style;
    /** 套件类型 */
    kitType?: ETheProcessTableListsVO_kitType;
    /** 套件字段类型 */
    kitColumnType?: ETheProcessTableListsVO_kitColumnType;
    /** 数值类型 */
    numberType?: ETheProcessTableListsVO_numberType;
    /** 是否必填 */
    isMust?: ETheProcessTableListsVO_isMust;
    /** 小数位数 */
    scaleDigit?: number;
    /** 是否是系统表单字段 这里表达的是审计字段：id、data_status、create_time 等等 */
    isSystem?: ETheProcessTableListsVO_isSystem;
    /** 是否是系统预设字段 */
    isSystemPreset?: ETheProcessTableListsVO_isSystemPreset;
    /** 全局不允许重复 */
    unableRepeat?: ETheProcessTableListsVO_unableRepeat;
    /** 表格内不允许重复 */
    unableRepeatInTable?: ETheProcessTableListsVO_unableRepeatInTable;
    /** 重复提示 */
    repeatTip?: string;
    /** 是否超链接 */
    isHyperlinkEnabled?: ETheProcessTableListsVO_isHyperlinkEnabled;
    /** 默认值类型 */
    defaultType?: ETheProcessTableListsVO_defaultType;
    /** 默认日期类型 */
    defaultDateType?: ETheProcessTableListsVO_defaultDateType;
    /** 默认值 */
    defaultValue?: string;
    /** 当动态控件选择了当前字段后，对应取关联表单的值是 */
    dynamicControlValueFieldSerialNo?: string;
    /** 处理人显示字段序列号 */
    processorShowFieldSerialNo?: string;
    /** 处理人显示字段编码 */
    processorShowFieldCode?: string;
}
/** 流程表单字段编码规则明细VO */
export interface IProcessFormFieldEncodingRuleDetailsVO {
    /** id */
    id?: string;
    /** 设置类型 */
    type?: EProcessFormFieldEncodingRuleDetailsVO_type;
    /** 日期格式 - 用于日期 */
    dateFormat?: EProcessFormFieldEncodingRuleDetailsVO_dateFormat;
    /** 固定值 - 用于固定值 */
    fixValue?: string;
    /** 位数 - 用于流水 */
    ruleLength?: number;
    /** 初始值 - 用于流水 */
    startValue?: number;
    /** 递增值 - 用于流水 */
    stepValue?: number;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording?: EProcessFormFieldEncodingRuleDetailsVO_isCodeAccording;
    /** 所属流程表单code -- 针对引用字段类型 */
    flowPathCode?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledSerialNo?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledCode?: string;
    /** 规则ID */
    flowPathFormFieldCodeNumberRuleId?: string;
    /** 排序 */
    sort?: number;
}
/** FormFieldOption */
export interface IFormFieldOption {
    /** undefined */
    name?: string;
    /** undefined */
    code?: string;
    /** undefined */
    color?: string;
}

export enum EflowPathSystemType {
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
    PROJECT_FILE = "PROJECT_FILE",
    PROJECT_FOLDER = "PROJECT_FOLDER",
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

export enum ETheProcessTableListsVO_type {
    /** 系统 */
    SYSTEM = "SYSTEM",
    /** 自定义 */
    CUSTOM = "CUSTOM"
}

export enum ETheProcessTableListsVO_formFieldTypeGroup {
    /** 表单 */
    FORM = "FORM",
    /** 样式 */
    STYLE = "STYLE"
}

export enum ETheProcessTableListsVO_formFieldType {
    /** 单行文字 */
    INPUT_TEXT = "INPUT_TEXT",
    /** 多行文字 */
    TEXTAREA = "TEXTAREA",
    /** 数字 */
    NUMBER = "NUMBER",
    /** 日期 */
    DATE = "DATE",
    /** 单选 */
    SELECTOR = "SELECTOR",
    /** 多选 */
    CHECKBOX = "CHECKBOX",
    /** 图片上传 */
    IMAGE_UPLOAD = "IMAGE_UPLOAD",
    /** 附件上传 */
    FILE_UPLOAD = "FILE_UPLOAD",
    /** 表格 */
    TABLE = "TABLE",
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 关联表单多选 */
    FORM_RP_MULTI = "FORM_RP_MULTI",
    /** 流水号 */
    CODE = "CODE",
    /** 地址 */
    ADDRESS = "ADDRESS",
    /** 定位 */
    POSITION = "POSITION",
    /** 电子邮箱 */
    EMAIL = "EMAIL",
    /** 手机号码 */
    MOBILE = "MOBILE",
    /** 身份证号码 */
    ID_CARD = "ID_CARD",
    /** 富文本 */
    RICH_TEXT = "RICH_TEXT",
    /** 关联查询 */
    ASSOCIATION_QUERY = "ASSOCIATION_QUERY",
    /** 说明文字 */
    DESC_TEXT = "DESC_TEXT",
    /** 分隔符 */
    SPLIT_LINE = "SPLIT_LINE",
    /** 批次号 */
    LOT_NO = "LOT_NO",
    /** 序列号 */
    SERIAL_NO = "SERIAL_NO",
    /** 自定义公式 */
    FORMULA = "FORMULA"
}

export enum ETheProcessTableListsVO_flowPathFormFieldTableType {
    /** 默认类型 */
    DEFAULT = "DEFAULT"
}

export enum ETheProcessTableListsVO_fixType {
    /** 左侧固定 */
    LEFT = "LEFT",
    /** 不固定 */
    NORMAL = "NORMAL",
    /** 右侧固定 */
    RIGHT = "RIGHT"
}

export enum ETheProcessTableListsVO_isShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_canQuery {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_dateType {
    /** 年-月-日 */
    DAY = "DAY",
    /** 年-月-日 时:分 */
    MIN = "MIN",
    /** 年-月-日 时:分:秒 */
    SECOND = "SECOND",
    /** 时:分 */
    HOUR_MIN = "HOUR_MIN",
    /** 年-月 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}

export enum ETheProcessTableListsVO_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_organizationType {
    /** 非组织 */
    NONE = "NONE",
    /** 班组 */
    CLASS_GROUP = "CLASS_GROUP",
    /** 部门 */
    DEPARTMENT = "DEPARTMENT",
    /** 人员 */
    USER = "USER",
    /** 处理人 */
    PROCESSOR = "PROCESSOR"
}

export enum ETheProcessTableListsVO_addressType {
    /** 省-市-区-详细地址 */
    REGION_AND_DETAIL_ADDRESS = "REGION_AND_DETAIL_ADDRESS",
    /** 省-市-区 */
    REGION = "REGION",
    /** 省-市-区-街道-详细地址 */
    STREET_AND_DETAIL_ADDRESS = "STREET_AND_DETAIL_ADDRESS",
    /** 省-市-区-街道 */
    STREET = "STREET"
}

export enum ETheProcessTableListsVO_isUseEmployeesWithAccounts {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_numberFormat {
    /** % */
    F1 = "F1",
    /** ￥ */
    F2 = "F2",
    /** $ */
    F3 = "F3",
    /** 金额大写 */
    F4 = "F4"
}

export enum ETheProcessTableListsVO_style {
    /** 高级 */
    ADVANCED = "ADVANCED",
    /** 级联 */
    CASCADE = "CASCADE"
}

export enum ETheProcessTableListsVO_kitType {
    /** 入库套件 */
    STORAGE_IN = "STORAGE_IN",
    /** 出库套件 */
    STORAGE_OUT = "STORAGE_OUT",
    /** 出库库存套件 */
    STORAGE_OUT_STORAGE = "STORAGE_OUT_STORAGE",
    /** 调拨套件 */
    STORAGE_MOVE = "STORAGE_MOVE",
    /** 调拨库存套件 */
    STORAGE_MOVE_STORAGE = "STORAGE_MOVE_STORAGE",
    /** 收款套件 */
    RECEIVED = "RECEIVED",
    /** 应收套件 */
    RECEIVABLE = "RECEIVABLE",
    /** 应收收款套件 */
    RECEIVABLE_COLLECTION = "RECEIVABLE_COLLECTION",
    /** 付款套件 */
    PAID = "PAID",
    /** 应付套件 */
    PAYABLE = "PAYABLE",
    /** 应付付款套件 */
    PAYABLE_PAYMENT = "PAYABLE_PAYMENT",
    /** 单据日期 */
    BILL_DATE = "BILL_DATE"
}

export enum ETheProcessTableListsVO_kitColumnType {
    /** 物料编码 */
    MATERIAL_CODE = "MATERIAL_CODE",
    /** 物料 */
    MATERIAL = "MATERIAL",
    /** 物料名称 */
    MATERIAL_NAME = "MATERIAL_NAME",
    /** 库存 */
    WAREHOUSE_MATERIAL_RP_ID = "WAREHOUSE_MATERIAL_RP_ID",
    /** 入库仓位 */
    IN_STOREHOUSE = "IN_STOREHOUSE",
    /** 出库仓位 */
    OUT_STOREHOUSE = "OUT_STOREHOUSE",
    /** 出入库数量 */
    IN_OUT_QUANTITY = "IN_OUT_QUANTITY",
    /** 客户 */
    CUSTOMER = "CUSTOMER",
    /** 业务员 */
    BUSINESS_USER = "BUSINESS_USER",
    /** 收款金额 */
    RECEIVED_AMOUNT = "RECEIVED_AMOUNT",
    /** 应收金额 */
    RECEIVABLE_AMOUNT = "RECEIVABLE_AMOUNT",
    /** 供应商 */
    SUPPLIER = "SUPPLIER",
    /** 付款金额 */
    PAID_AMOUNT = "PAID_AMOUNT",
    /** 应付金额 */
    PAYABLE_AMOUNT = "PAYABLE_AMOUNT",
    /** 计量单位 */
    UNIT = "UNIT",
    /** 入库仓库 */
    IN_STORE = "IN_STORE",
    /** 入库仓库 */
    OUT_STORE = "OUT_STORE",
    /** 可用库存 */
    USABLE_QUANTITY = "USABLE_QUANTITY",
    /** 批次 */
    LOT_NO = "LOT_NO",
    /** 序列号 */
    SERIAL_NO = "SERIAL_NO"
}

export enum ETheProcessTableListsVO_numberType {
    /** 整数 */
    INTEGER = "INTEGER",
    /** 小数 */
    DECIMAL = "DECIMAL"
}

export enum ETheProcessTableListsVO_isMust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_isSystem {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_isSystemPreset {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_unableRepeat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_unableRepeatInTable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_isHyperlinkEnabled {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessTableListsVO_defaultType {
    /** 固定值 */
    FIXED = "FIXED",
    /** 计算公式 */
    FORMULA = "FORMULA",
    /** 数据联动 */
    DATA_LINKAGE = "DATA_LINKAGE"
}

export enum ETheProcessTableListsVO_defaultDateType {
    /** 未配置 */
    NONE = "NONE",
    /** 系统时间 */
    SYSTEM = "SYSTEM",
    /** 固定时间 */
    FIX = "FIX"
}

export enum EProcessFormFieldEncodingRuleDetailsVO_type {
    /** 固定值 */
    FIXED = "FIXED",
    /** 日期 */
    DATE = "DATE",
    /** 自动计数 */
    AUTO_NUMBER = "AUTO_NUMBER",
    /** 引用字段 */
    FLOW_PATH_FIELD = "FLOW_PATH_FIELD",
    /** ID的36进制 */
    ID36 = "ID36"
}

export enum EProcessFormFieldEncodingRuleDetailsVO_dateFormat {
    /** 年 */
    YEAR = "YEAR",
    /** 年月 */
    YEAR_MONTH = "YEAR_MONTH",
    /** 年月日 */
    YEAR_MONTH_DAY = "YEAR_MONTH_DAY",
    /** 月 */
    MONTH = "MONTH",
    /** 月日 */
    MONTH_DAY = "MONTH_DAY",
    /** 日 */
    DAY = "DAY"
}

export enum EProcessFormFieldEncodingRuleDetailsVO_isCodeAccording {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}
