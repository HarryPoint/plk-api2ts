import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16400/doc.html#/default/自定义应用相关/getTableColumnBySystemTypeUsingGET
*/
export default function fetchMethod(options: { params: { flowPathSystemType?: ('STOREHOUSE' | 'WAREHOUSE' | 'PRODUCE_ORDER' | 'ANDON' | 'EMPLOYEE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'AREA' | 'CUSTOMER' | 'ROUTING' | 'MATERIAL' | 'MATERIAL_BOM' | 'PROCESS' | 'POSITION' | 'BANK' | 'UNIT' | 'WAREHOUSE_MATERIAL_RP' | 'MOLD' | 'ALLOCATION_TYPE' | 'IN_STORAGE_TYPE' | 'OUT_STORAGE_TYPE' | 'OTHER_IN_STORAGE_ORDER' | 'OTHER_OUT_STORAGE_ORDER' | 'ALLOCATION_ORDER' | 'INVENTORY_LOSSES_ORDER' | 'INVENTORY_PROFIT_ORDER' | 'DEVICE' | 'DEVICE_TYPE' | 'DEVICE_PARTS' | 'DEVICE_EMPLOYEE_CAPACITY' | 'DEVICE_MAINTAIN_SCHEME' | 'DEVICE_MAINTAIN_PLAN' | 'DEVICE_MAINTAIN_TASK' | 'PRODUCTION_LINE' | 'SALES_PLAN' | 'QUOTE_BILL' | 'FOLLOW_RECORD' | 'FOLLOW_PLAN' | 'DAILY_WORK' | 'CONTRACT' | 'BUSINESS_CHANCE' | 'CUSTOMER_TRANSFER' | 'RECEIPT' | 'USER' | 'IMPROVEMENT_CATEGORY' | 'PROPOSAL' | 'KAIZEN_PROJECT_TASK' | 'KAIZEN_PROJECT' | 'PROPOSAL_SCORE' | 'DEPARTMENT_YEAR_TARGET_SETTING' | 'SUPPLIER' | 'PURCHASE_ORDER' | 'PAYMENT_ACCOUNT' | 'PURCHASE_IN_ORDER' | 'PURCHASE_RETURN_ORDER' | 'PAYMENT_ORDER' | 'PAYMENT_RETURN_ORDER' | 'PREPAID_ORDER' | 'SALES_ORDER' | 'SALES_OUT_STORAGE_ORDER' | 'SALES_RETURN_ORDER' | 'RECEIVABLE_ORDER' | 'RECEIVABLE_RETURN_ORDER' | 'PRE_RECEIVABLE_ORDER' | 'PRODUCTION_MATERIAL_ISSUANCE_ORDER' | 'PRODUCTION_MATERIAL_RETURN_ORDER' | 'PRODUCTION_STOCK_IN_ORDER' | 'PRODUCTION_STOCK_RETURN_ORDER' | 'PRODUCE_FEE_TYPE' | 'PRODUCE_FEE_COLLECT' | 'PROJECT' | 'PROJECT_TYPE' | 'PROJECT_RISK_TYPE' | 'PROJECT_RISK_FLAG' | 'PROJECT_PLAN' | 'PROJECT_STAGE' | 'PROJECT_TASK' | 'PROJECT_TASK_REVIEW' | 'PROJECT_TASK_DECISION' | 'PROJECT_TASK_TYPE' | 'PROJECT_MEMBER' | 'PROJECT_ROLE' | 'PROJECT_RISK' | 'PROJECT_FEE' | 'PROJECT_QUALITY_ISSUE' | 'PROJECT_QUALITY_TARGET' | 'PROJECT_MEETING_SUMMARY' | 'PROJECT_ACTION_ITEM' | 'PROJECT_LEADER_INSTRUCT' | 'PROJECT_MEMORABILIA' | 'PROJECT_BRIEF_REPORT' | 'PROJECT_MODIFICATION' | 'PROJECT_PLAN_MODIFICATION' | 'PROJECT_MEMBER_MODIFICATION' | 'QMS_ANNUAL_QUALITY_TARGET' | 'QMS_QUALITY_WORK_PLAN' | 'QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT' | 'QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_INTERNAL_AUDIT_REPORT' | 'QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_TARGET_ITEM' | 'QMS_REGULATION_NO_AND_CONTENT' | 'QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_EXTERNAL_AUDIT_REPORT' | 'QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS' | 'QMS_SPECIAL_AUDIT_REPORT' | 'QMS_MANAGEMENT_REVIEW_PLAN' | 'QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL' | 'QMS_MANAGEMENT_REVIEW_REPORT' | 'QMS_INSPECTION_CATEGORY' | 'QMS_INSPECTION_METHOD' | 'QMS_SAMPLING_STANDARDS' | 'QMS_INSPECTION_ITEMS' | 'QMS_INSPECTION_SCHEME' | 'QMS_INCOMING_INSPECTION_APPLY_FORM' | 'QMS_INCOMING_INSPECTION_TASK' | 'QMS_INCOMING_INSPECTION_REPORT' | 'QMS_FIRST_INSPECTION_APPLY_FORM' | 'QMS_FIRST_INSPECTION_TASK' | 'QMS_FIRST_INSPECTION_REPORT' | 'QMS_PROCESS_INSPECTION_APPLY_FORM' | 'QMS_PROCESS_INSPECTION_TASK' | 'QMS_PROCESS_INSPECTION_REPORT' | 'QMS_PRODUCT_INSPECTION_APPLY_FORM' | 'QMS_PRODUCT_INSPECTION_TASK' | 'QMS_PRODUCT_INSPECTION_REPORT' | 'QMS_SHIPMENT_INSPECTION_APPLY_FORM' | 'QMS_SHIPMENT_INSPECTION_TASK' | 'QMS_SHIPMENT_INSPECTION_REPORT' | 'QMS_QUALITY_PERSONNEL' | 'QMS_REASON_OF_NON_CONFORMANCE' | 'QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT' | 'QMS_HANDLING_OF_INCOMING_NON_CONFORMING' | 'QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING' | 'QMS_HANDLE_PRODUCT_NON_CONFORMING' | 'QMS_QUALITY_ISSUE_INFORMATION_REPORT' | 'QMS_QUALITY_PROBLEM_ANALYSIS_REPORT' | 'QMS_QUALITY_CORRECTIVE_ACTION_REPORT' | 'QMS_8D_REPORT' | 'QMS_TECHNICAL_ZEROING_REPORT' | 'QMS_MANAGE_ZEROING_REPORT' | 'QMS_FRACAS_REPORT' | 'QMS_IMPROVEMENT_PROJECT' | 'QMS_HANDLE_FIRST_INSPECT_DEFECTS' | 'QMS_HANDLE_PROCESS_INSPECT_DEFECTS' | 'QMS_HANDLE_PATROL_INSPECT_DEFECTS' | 'QMS_ADVANCE_TEAM_DECLARE' | 'QMS_ADVANCE_PERSONNEL_DECLARE' | 'QMS_QUALITY_MONTH_REPORT_FILL' | 'QMS_SEAL_STYLE' | 'QMS_SEAL_APPLY_FOR_RECEIVING' | 'QMS_SEAL_APPLY_FOR_REPORT_LOSS' | 'QMS_SEAL_LEDGER' | 'QMS_SEAL_APPLY_FOR_CANCELLATION' | 'QMS_SEAL_APPLY_FOR_REPLACEMENT' | 'QMS_PATROL_INSPECTION_PLAN' | 'QMS_PATROL_INSPECTION_TASK' | 'QMS_PATROL_INSPECTION_REPORT' | 'FILE_CATEGORY' | 'FILE_OBJECT') } }, extraOptions?: any) {
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
    ts?: number;
}
/** 流程表格列VO */
export interface ITheProcessTableListsVO {
    /** id */
    id?: number;
    /** 企业id */
    enterpriseId?: number;
    /** 流程id */
    flowPathId?: number;
    /** 流程版本id - 只有根据版本ID查询才有。如果为空，则默认就是最新版本 */
    flowPathVersionId?: number;
    /** 列类型 */
    type?: ('SYSTEM' | 'CUSTOM');
    /** 列code */
    code?: string;
    /** 列名称 */
    name?: string;
    /** 流程表单id */
    flowPathFormFieldId?: number;
    /** 表单类型分组 */
    formFieldTypeGroup?: ('FORM' | 'STYLE');
    /** 表单类型 */
    formFieldType?: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
    /** 表格类型 */
    flowPathFormFieldTableType?: ('DEFAULT');
    /** 表格内字段集 */
    tableCustomFormFields?: ITheProcessTableListsVO[];
    /** 编码字段编码规则集 */
    numberRuleDetails?: IProcessFormFieldEncodingRuleDetailsVO[];
    /** 选项集 */
    selectorList?: IFormFieldOption[];
    /** 序号值 */
    serialNo?: string;
    /** 定位类型 */
    fixType?: ('LEFT' | 'NORMAL' | 'RIGHT');
    /** 定位类型排序 */
    fixSort?: number;
    /** 是否显示，控制配置表单是否显示 */
    isShow?: ('Y' | 'N');
    /** 能否查询，控制查询条件是否可勾选 */
    canQuery?: ('Y' | 'N');
    /** 排序 - 每个定位类型独立排序 */
    sort?: number;
    /** 日期类型 */
    dateType?: ('DAY' | 'MIN' | 'SECOND' | 'HOUR_MIN' | 'MONTH' | 'YEAR');
    /** 是否表格字段 */
    isTableField?: ('Y' | 'N');
    /** 父级流程表单id */
    parentFlowPathFormFieldId?: number;
    /** 父级流程表单code */
    parentFlowPathFormFieldCode?: string;
    /** 组织类型 */
    organizationType?: ('NONE' | 'CLASS_GROUP' | 'DEPARTMENT' | 'USER' | 'PROCESSOR');
    /** 实际存储数据字段列表 --- 数据格式[{"code":"字段编码", "name":"字段名称", "addressFieldCode" : "地址字段编码", "addressFieldSerialNo": "地址字段序列号"}] */
    actualFields?: Record<string, any>[];
    /** 地址类型 */
    addressType?: ('REGION_AND_DETAIL_ADDRESS' | 'REGION' | 'STREET_AND_DETAIL_ADDRESS' | 'STREET');
    /** 是否使用有账号的员工 */
    isUseEmployeesWithAccounts?: ('Y' | 'N');
    /** 关联表单code */
    formRpCode?: string;
    /** 关联详细表单编码 */
    formDetailRpCode?: string;
    /** 数值格式 */
    numberFormat?: ('F1' | 'F2' | 'F3' | 'F4');
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段Serial No */
    formRpSelectorShowFieldSerialNo?: string;
    /** 关联表单展示code集合 */
    formRpShowFields?: Record<string, any>[];
    /** 关联表单多选分组字段code集合 */
    formRpMultiGroupFields?: Record<string, any>[];
    /** 选择框样式 */
    style?: ('ADVANCED' | 'CASCADE');
    /** 套件类型 */
    kitType?: ('STORAGE_IN' | 'STORAGE_OUT' | 'STORAGE_OUT_STORAGE' | 'STORAGE_MOVE' | 'STORAGE_MOVE_STORAGE' | 'RECEIVED' | 'RECEIVABLE' | 'RECEIVABLE_COLLECTION' | 'PAID' | 'PAYABLE' | 'PAYABLE_PAYMENT' | 'BILL_DATE');
    /** 套件字段类型 */
    kitColumnType?: ('MATERIAL_CODE' | 'MATERIAL' | 'MATERIAL_NAME' | 'WAREHOUSE_MATERIAL_RP_ID' | 'IN_STOREHOUSE' | 'OUT_STOREHOUSE' | 'IN_OUT_QUANTITY' | 'CUSTOMER' | 'BUSINESS_USER' | 'RECEIVED_AMOUNT' | 'RECEIVABLE_AMOUNT' | 'SUPPLIER' | 'PAID_AMOUNT' | 'PAYABLE_AMOUNT' | 'UNIT' | 'IN_STORE' | 'OUT_STORE' | 'USABLE_QUANTITY' | 'LOT_NO' | 'SERIAL_NO');
    /** 数值类型 */
    numberType?: ('INTEGER' | 'DECIMAL');
    /** 是否必填 */
    isMust?: ('Y' | 'N');
    /** 小数位数 */
    scaleDigit?: number;
    /** 是否是系统表单字段 这里表达的是审计字段：id、data_status、create_time 等等 */
    isSystem?: ('Y' | 'N');
    /** 是否是系统预设字段 */
    isSystemPreset?: ('Y' | 'N');
    /** 全局不允许重复 */
    unableRepeat?: ('Y' | 'N');
    /** 表格内不允许重复 */
    unableRepeatInTable?: ('Y' | 'N');
    /** 重复提示 */
    repeatTip?: string;
    /** 是否超链接 */
    isHyperlinkEnabled?: ('Y' | 'N');
    /** 默认值类型 */
    defaultType?: ('FIXED' | 'FORMULA' | 'DATA_LINKAGE');
    /** 默认日期类型 */
    defaultDateType?: ('NONE' | 'SYSTEM' | 'FIX');
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
    id?: number;
    /** 设置类型 */
    type?: ('FIXED' | 'DATE' | 'AUTO_NUMBER' | 'FLOW_PATH_FIELD' | 'ID36');
    /** 日期格式 - 用于日期 */
    dateFormat?: ('YEAR' | 'YEAR_MONTH' | 'YEAR_MONTH_DAY' | 'MONTH' | 'MONTH_DAY' | 'DAY');
    /** 固定值 - 用于固定值 */
    fixValue?: string;
    /** 位数 - 用于流水 */
    ruleLength?: number;
    /** 初始值 - 用于流水 */
    startValue?: number;
    /** 递增值 - 用于流水 */
    stepValue?: number;
    /** 是否是编码依据 - 仅能配置一项为编码依据 */
    isCodeAccording?: ('Y' | 'N');
    /** 所属流程表单code -- 针对引用字段类型 */
    flowPathCode?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledSerialNo?: string;
    /** 所属流程表单字段序列值 -- 针对引用字段类型 */
    flowPathFormFiledCode?: string;
    /** 规则ID */
    flowPathFormFieldCodeNumberRuleId?: number;
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
