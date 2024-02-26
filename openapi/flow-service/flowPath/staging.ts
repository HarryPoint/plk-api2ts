import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/stagingUsingPOST
*/
export default function fetchMethod(options: { data: IProcessEditDTO2params: { enterpriseId?: number, extraOptions?: any) {
    return http<IJSONResultProcessVersionRespondsToVO>(
        {
            url: "/flow-service/flowPath/staging",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** 流程编辑DTO_2 */
export interface IProcessEditDTO2 {
    /** id */
    id?: number;
    /** 名称 */
    lastName: string;
    /** 编号 */
    code?: string;
    /** 应用类型 */
    type?: ('BILL' | 'DATA' | 'TREE_DATA' | 'PAGE');
    /** 简介 */
    lastDescription?: string;
    /** 发布终端值合计 */
    lastPublishTotal?: number;
    /** 是否系统级流程 */
    isSystem?: ('Y' | 'N');
    /** 系统流程类型 */
    flowPathSystemType?: ('STOREHOUSE' | 'WAREHOUSE' | 'PRODUCE_ORDER' | 'ANDON' | 'EMPLOYEE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'AREA' | 'CUSTOMER' | 'ROUTING' | 'MATERIAL' | 'MATERIAL_BOM' | 'PROCESS' | 'POSITION' | 'BANK' | 'UNIT' | 'WAREHOUSE_MATERIAL_RP' | 'MOLD' | 'ALLOCATION_TYPE' | 'IN_STORAGE_TYPE' | 'OUT_STORAGE_TYPE' | 'OTHER_IN_STORAGE_ORDER' | 'OTHER_OUT_STORAGE_ORDER' | 'ALLOCATION_ORDER' | 'INVENTORY_LOSSES_ORDER' | 'INVENTORY_PROFIT_ORDER' | 'DEVICE' | 'DEVICE_TYPE' | 'DEVICE_PARTS' | 'DEVICE_EMPLOYEE_CAPACITY' | 'DEVICE_MAINTAIN_SCHEME' | 'DEVICE_MAINTAIN_PLAN' | 'DEVICE_MAINTAIN_TASK' | 'PRODUCTION_LINE' | 'SALES_PLAN' | 'QUOTE_BILL' | 'FOLLOW_RECORD' | 'FOLLOW_PLAN' | 'DAILY_WORK' | 'CONTRACT' | 'BUSINESS_CHANCE' | 'CUSTOMER_TRANSFER' | 'RECEIPT' | 'USER' | 'IMPROVEMENT_CATEGORY' | 'PROPOSAL' | 'KAIZEN_PROJECT_TASK' | 'KAIZEN_PROJECT' | 'PROPOSAL_SCORE' | 'DEPARTMENT_YEAR_TARGET_SETTING' | 'SUPPLIER' | 'PURCHASE_ORDER' | 'PAYMENT_ACCOUNT' | 'PURCHASE_IN_ORDER' | 'PURCHASE_RETURN_ORDER' | 'PAYMENT_ORDER' | 'PAYMENT_RETURN_ORDER' | 'PREPAID_ORDER' | 'SALES_ORDER' | 'SALES_OUT_STORAGE_ORDER' | 'SALES_RETURN_ORDER' | 'RECEIVABLE_ORDER' | 'RECEIVABLE_RETURN_ORDER' | 'PRE_RECEIVABLE_ORDER' | 'PRODUCTION_MATERIAL_ISSUANCE_ORDER' | 'PRODUCTION_MATERIAL_RETURN_ORDER' | 'PRODUCTION_STOCK_IN_ORDER' | 'PRODUCTION_STOCK_RETURN_ORDER' | 'PRODUCE_FEE_TYPE' | 'PRODUCE_FEE_COLLECT' | 'PROJECT' | 'PROJECT_TYPE' | 'PROJECT_RISK_TYPE' | 'PROJECT_RISK_FLAG' | 'PROJECT_PLAN' | 'PROJECT_STAGE' | 'PROJECT_TASK' | 'PROJECT_TASK_REVIEW' | 'PROJECT_TASK_DECISION' | 'PROJECT_TASK_TYPE' | 'PROJECT_MEMBER' | 'PROJECT_ROLE' | 'PROJECT_RISK' | 'PROJECT_FEE' | 'PROJECT_QUALITY_ISSUE' | 'PROJECT_QUALITY_TARGET' | 'PROJECT_MEETING_SUMMARY' | 'PROJECT_ACTION_ITEM' | 'PROJECT_LEADER_INSTRUCT' | 'PROJECT_MEMORABILIA' | 'PROJECT_BRIEF_REPORT' | 'PROJECT_MODIFICATION' | 'PROJECT_PLAN_MODIFICATION' | 'PROJECT_MEMBER_MODIFICATION' | 'QMS_ANNUAL_QUALITY_TARGET' | 'QMS_QUALITY_WORK_PLAN' | 'QMS_INCOMPLETE_SITUATION_ANALYSIS_REPORT' | 'QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_INTERNAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_INTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_INTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_INTERNAL_AUDIT_REPORT' | 'QMS_INTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_TARGET_ITEM' | 'QMS_REGULATION_NO_AND_CONTENT' | 'QMS_EXTERNAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_LIST_OF_EXTERNAL_AUDIT_RECOMMENDATIONS' | 'QMS_EXTERNAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_EXTERNAL_AUDIT_REPORT' | 'QMS_SPECIAL_AUDIT_IMPLEMENTATION_PLAN' | 'QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS' | 'QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT' | 'QMS_SPECIAL_AUDIT_NO_FIT_IN_CORRECTIVE' | 'QMS_LIST_OF_SPECIAL_AUDIT_PROPOSALS' | 'QMS_SPECIAL_AUDIT_REPORT' | 'QMS_MANAGEMENT_REVIEW_PLAN' | 'QMS_MANAGEMENT_REVIEW_INPUT_MATERIAL' | 'QMS_MANAGEMENT_REVIEW_REPORT' | 'QMS_INSPECTION_CATEGORY' | 'QMS_INSPECTION_METHOD' | 'QMS_SAMPLING_STANDARDS' | 'QMS_INSPECTION_ITEMS' | 'QMS_INSPECTION_SCHEME' | 'QMS_INCOMING_INSPECTION_APPLY_FORM' | 'QMS_INCOMING_INSPECTION_TASK' | 'QMS_INCOMING_INSPECTION_REPORT' | 'QMS_FIRST_INSPECTION_APPLY_FORM' | 'QMS_FIRST_INSPECTION_TASK' | 'QMS_FIRST_INSPECTION_REPORT' | 'QMS_PROCESS_INSPECTION_APPLY_FORM' | 'QMS_PROCESS_INSPECTION_TASK' | 'QMS_PROCESS_INSPECTION_REPORT' | 'QMS_PRODUCT_INSPECTION_APPLY_FORM' | 'QMS_PRODUCT_INSPECTION_TASK' | 'QMS_PRODUCT_INSPECTION_REPORT' | 'QMS_SHIPMENT_INSPECTION_APPLY_FORM' | 'QMS_SHIPMENT_INSPECTION_TASK' | 'QMS_SHIPMENT_INSPECTION_REPORT' | 'QMS_QUALITY_PERSONNEL' | 'QMS_REASON_OF_NON_CONFORMANCE' | 'QMS_HANDLING_METHOD_OF_NONCONFORMING_PRODUCT' | 'QMS_HANDLING_OF_INCOMING_NON_CONFORMING' | 'QMS_HANDLING_OF_SHIPMENTS_NON_CONFORMING' | 'QMS_HANDLE_PRODUCT_NON_CONFORMING' | 'QMS_QUALITY_ISSUE_INFORMATION_REPORT' | 'QMS_QUALITY_PROBLEM_ANALYSIS_REPORT' | 'QMS_QUALITY_CORRECTIVE_ACTION_REPORT' | 'QMS_8D_REPORT' | 'QMS_TECHNICAL_ZEROING_REPORT' | 'QMS_MANAGE_ZEROING_REPORT' | 'QMS_FRACAS_REPORT' | 'QMS_IMPROVEMENT_PROJECT' | 'QMS_HANDLE_FIRST_INSPECT_DEFECTS' | 'QMS_HANDLE_PROCESS_INSPECT_DEFECTS' | 'QMS_HANDLE_PATROL_INSPECT_DEFECTS' | 'QMS_ADVANCE_TEAM_DECLARE' | 'QMS_ADVANCE_PERSONNEL_DECLARE' | 'QMS_QUALITY_MONTH_REPORT_FILL' | 'QMS_SEAL_STYLE' | 'QMS_SEAL_APPLY_FOR_RECEIVING' | 'QMS_SEAL_APPLY_FOR_REPORT_LOSS' | 'QMS_SEAL_LEDGER' | 'QMS_SEAL_APPLY_FOR_CANCELLATION' | 'QMS_SEAL_APPLY_FOR_REPLACEMENT' | 'QMS_PATROL_INSPECTION_PLAN' | 'QMS_PATROL_INSPECTION_TASK' | 'QMS_PATROL_INSPECTION_REPORT' | 'FILE_CATEGORY' | 'FILE_OBJECT');
    /** 是否是树状应用 */
    isTree?: ('Y' | 'N');
    /** 表单集 */
    formFields?: IProcessFormFieldEditDTO[];
    /** 节点 */
    flowPathNode?: IProcessNodeEditDTO4;
    /** 权限 */
    permission?: IProcessFormPermissionsEditDTO;
    /** 业务事件集 */
    flowPathEvents?: IProcessEventEditDTO[];
    /** 自定义通知内容关联的字段SerialNo */
    customFieldSerialNos?: string[];
    /** 排序 */
    sort?: number;
    /** 打印模板 */
    printTemplates?: IProcessPrintTemplateEditDTO[];
    /** 发布企业路由位置 */
    publishEnterpriseRouterList?: IPublishEnterpriseRouterEditDTO[];
    /** 流程结果通知 */
    flowPathResultNotify?: ('Y' | 'N');
    /** 重新提交通知 */
    recommitNotify?: ('Y' | 'N');
    /** 作废停用通知 */
    invalidNotify?: ('Y' | 'N');
    /** 删除通知 */
    deleteNotify?: ('Y' | 'N');
    /** 应用访问链接 */
    accessUrl?: string;
    /** 代办设置 */
    todoConfig?: IAgencyAllocation;
    /** 详细页配置列表 */
    detailPageConfigList?: IFlowPathDetailPageConfigEditDTO[];
    /** 应用服务包ID */
    appServicePackId?: number;
    /** 应用级别 */
    applicationLevel?: ('PROJECT_MANAGER' | 'ENTERPRISE');
    /** undefined */
    isInitAppServicePack?: ('Y' | 'N');
}
/** 流程表单字段编辑DTO */
export interface IProcessFormFieldEditDTO {
    /** id */
    id?: number;
    /** 类型分组 */
    typeGroup?: ('FORM' | 'STYLE');
    /** 类型 */
    type: ('INPUT_TEXT' | 'TEXTAREA' | 'NUMBER' | 'DATE' | 'SELECTOR' | 'CHECKBOX' | 'IMAGE_UPLOAD' | 'FILE_UPLOAD' | 'TABLE' | 'FORM_RP' | 'FORM_RP_MULTI' | 'CODE' | 'ADDRESS' | 'POSITION' | 'EMAIL' | 'MOBILE' | 'ID_CARD' | 'RICH_TEXT' | 'ASSOCIATION_QUERY' | 'DESC_TEXT' | 'SPLIT_LINE' | 'LOT_NO' | 'SERIAL_NO' | 'FORMULA');
    /** 是否是系统表单字段 */
    isSystem?: ('Y' | 'N');
    /** 是否是系统预置字段 */
    isSystemPreset?: ('Y' | 'N');
    /** 是否是系统必填字段 */
    isSystemMust?: ('Y' | 'N');
    /** 是否在表格中展示列 */
    isTableShow?: ('Y' | 'N');
    /** 是否是表格内字段 */
    isTableField?: ('Y' | 'N');
    /** 是否是套件 */
    isKit?: ('Y' | 'N');
    /** 套件类型 */
    kitType?: ('STORAGE_IN' | 'STORAGE_OUT' | 'STORAGE_OUT_STORAGE' | 'STORAGE_MOVE' | 'STORAGE_MOVE_STORAGE' | 'RECEIVED' | 'RECEIVABLE' | 'RECEIVABLE_COLLECTION' | 'PAID' | 'PAYABLE' | 'PAYABLE_PAYMENT' | 'BILL_DATE');
    /** 套件字段类型 */
    kitColumnType?: ('MATERIAL_CODE' | 'MATERIAL' | 'MATERIAL_NAME' | 'WAREHOUSE_MATERIAL_RP_ID' | 'IN_STOREHOUSE' | 'OUT_STOREHOUSE' | 'IN_OUT_QUANTITY' | 'CUSTOMER' | 'BUSINESS_USER' | 'RECEIVED_AMOUNT' | 'RECEIVABLE_AMOUNT' | 'SUPPLIER' | 'PAID_AMOUNT' | 'PAYABLE_AMOUNT' | 'UNIT' | 'IN_STORE' | 'OUT_STORE' | 'USABLE_QUANTITY' | 'LOT_NO' | 'SERIAL_NO');
    /** 表格类型 */
    tableType?: ('DEFAULT');
    /** 选择类型 */
    selectorType?: ('FLAT' | 'PULL_DOWN');
    /** 名称 */
    name: string;
    /** 编号 - 由前端生成，生成时和序号值(serialNo)一致 */
    code?: string;
    /** 序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    serialNo: string;
    /** 提示 */
    tip?: string;
    /** 说明描述 */
    description?: string;
    /** 宽度 */
    span?: number;
    /** 默认值类型 */
    defaultType?: ('FIXED' | 'FORMULA' | 'DATA_LINKAGE');
    /** 默认日期类型 */
    defaultDateType?: ('NONE' | 'SYSTEM' | 'FIX');
    /** 默认值 - 多选、起止时间、图片、附件，都以json数组对象传来，例如：["xxx", "xxx2", "xxx3"]  - 地址则 JSON数组是 ["region_code" : "XXX", "detail_address": "详细地址"] - 定位 JSON数组是：{"location":{"lat":xx, "lng":zzz}, "detail_address":""}  */
    defaultValue?: string;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: IProcessFormFormulaFieldDTO[];
    /** 编码规则 */
    codeNumberRules?: IEditTheDTOForProcessFormFieldEncodingRuleDetails[];
    /** 是否必填 */
    isMust: ('Y' | 'N');
    /** 允许扫码 */
    isScan?: ('Y' | 'N');
    /** 数值类型 */
    numberType?: ('INTEGER' | 'DECIMAL');
    /** 小数位数 */
    scaleDigit?: number;
    /** 是否允许负数 */
    canNegative?: ('Y' | 'N');
    /** 数值格式 */
    numberFormat?: ('F1' | 'F2' | 'F3' | 'F4');
    /** 日期类型 */
    dateType?: ('DAY' | 'MIN' | 'SECOND' | 'HOUR_MIN' | 'MONTH' | 'YEAR');
    /** 选项集 - 值为code、name的json对象集 */
    selectorList?: IFormFieldOption[];
    /** 选项集来源 */
    selectorOptionSource?: ('DEFAULT_FILL' | 'SYSTEM_DICTIONARY');
    /** 选项集来源业务编码 */
    selectorOptionSourceBusinessCode?: ('MATERIAL_TYPE' | 'DEPARTMENT_ORG_CATEGORY' | 'DEPARTMENT_ORG_TYPE' | 'PROJECT_TYPE' | 'PROJECT_CATEGORY' | 'PROJECT_TASK_PRIORITY' | 'PROJECT_ACTION_ITEM_TYPE' | 'PROJECT_FEEDBACK_CYCLE' | 'PROJECT_MEETING_TYPE' | 'PROJECT_SECRET_TYPE' | 'QMS_ANNUAL_QUALITY_MONITOR_RATE' | 'QMS_QUALITATIVE_TARGET_VALUE' | 'QMS_QUALITY_WORK_PLAN_COMPLETE_STATUS' | 'QMS_INTERNAL_AUDIT_AND_INSPECTION_RESULT' | 'QMS_INTERNAL_AUDIT_LEVEL_OF_NON_CONFORMANCE' | 'QMS_INTERNAL_AUDIT_CORRECTIVE_RESULT' | 'QMS_EXTERNAL_AUDIT_CORRECTIVE_RESULT' | 'QMS_SPECIAL_AUDIT_CORRECTIVE_RESULT' | 'QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN_WORK_TYPE' | 'QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE' | 'QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS_INSPECTION_RESULT' | 'QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE' | 'QMS_SAMPLING_STANDARDS_NATIONAL_DOCUMENTS' | 'QMS_QUALITY_PERSONNEL_AUTHORIZED_INSPECTION_DUTIES' | 'QMS_QUALITY_PERSONNEL_WORKING_FORM' | 'QMS_QUALITY_PERSONNEL_GROUP' | 'QMS_QUALITY_PERSONNEL_CERTIFICATE_NAME' | 'QMS_QUALITY_PERSONNEL_CERTIFICATE_STATUS' | 'QMS_SEAL_STYLE_QUALIFICATION' | 'QMS_SEAL_STATUS' | 'QMS_ANNUAL_QUALITY_TARGET_CATEGORY' | 'QMS_SAMPLING_STANDARDS_AQL' | 'QMS_SAMPLING_STANDARDS_CHARACTER_CODE' | 'QMS_SAMPLING_STANDARDS_LEVEL' | 'QMS_INSPECTION_INCOMING_TYPE' | 'QMS_PROJECT_TASK_REVIEW_RESULT' | 'QMS_PROJECT_TASK_DECISION_RESULT' | 'QMS_INSPECTION_BUSINESS_TYPE' | 'DEVICE_EMPLOYEE_MAINTAIN_LEVEL');
    /** 下拉选项关联显示列表 */
    selectorAssociateDisplayList?: IProcessFormFieldDropDownOptionAssociatedDisplayEditDTO[];
    /** 选项集是否可修改 */
    isCanModifySelectorOption?: ('Y' | 'N');
    /** 关联表单code */
    formRpCode?: string;
    /** 关联详细表单编码 */
    formDetailRpCode?: string;
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段SerialNo */
    formRpSelectorShowFieldSerialNo?: string;
    /** 关联表单筛选条件组集 */
    formRpFilterGroups?: IProcessFormAssociatedFormFilterGroupEditDTO[];
    /** 关联表单填充规则集 */
    formRpFills?: IProcessFormAssociatedFormFillEditDTO[];
    /** 表格字段集 */
    tableCustomFormFields?: IProcessFormFieldEditDTO[];
    /** 选择框样式 */
    style?: ('ADVANCED' | 'CASCADE');
    /** 关联表单展示code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"}] */
    formRpShowFields?: Record<string, any>[];
    /** 关联表单多选分组字段code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段2编码", serialNo:"字段2SerialNo", "name":"字段2名称"}] */
    formRpMultiGroupFields?: Record<string, any>[];
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
    /** 组织类型 */
    organizationType?: ('NONE' | 'CLASS_GROUP' | 'DEPARTMENT' | 'USER' | 'PROCESSOR');
    /** 表格字段列表 */
    actualFields?: Record<string, any>[];
    /** 是否自动获取位置 */
    isAutoGetLocation?: ('Y' | 'N');
    /** 地址类型 */
    addressType?: ('REGION_AND_DETAIL_ADDRESS' | 'REGION' | 'STREET_AND_DETAIL_ADDRESS' | 'STREET');
    /** 全局不允许重复 */
    unableRepeat?: ('Y' | 'N');
    /** 表格内不允许重复 */
    unableRepeatInTable?: ('Y' | 'N');
    /** 重复提示 */
    repeatTip?: string;
    /** 是否使用有账号的员工 */
    isUseEmployeesWithAccounts?: ('Y' | 'N');
    /** 排序 */
    sort?: number;
    /** 关联查询显示样式 */
    associationQueryShowStyle?: ('SINGLE' | 'TABLE');
    /** 数据联动 */
    dataLinkage?: IFlowPathFormFieldDataLinkageEditDTO;
    /** 字段值限制规则 */
    valueLimitRules?: IFlowPathFormFieldValueLimitRuleEditDTO[];
    /** 是否启用超链接, 默认为N */
    isHyperlinkEnabled?: ('Y' | 'N');
    /** 是否表格内批量选择 */
    isInsideTableBatchSelect?: ('Y' | 'N');
    /** 当动态控件选择了当前字段后，对应取关联表单的值是 */
    dynamicControlValueFieldSerialNo?: string;
    /** 处理人显示字段序列号 */
    processorShowFieldSerialNo?: string;
    /** 处理人显示字段编码 */
    processorShowFieldCode?: string;
}
/** 流程表单公式字段DTO */
export interface IProcessFormFormulaFieldDTO {
    /** 类型 */
    type: ('CURRENT' | 'FORM_FIELD');
    /** 计算公式用到的表单序号值 */
    serialNo: string;
    /** 用到的函数类型 */
    funType?: ('DEFAULT' | 'SUM' | 'MAX' | 'MIN' | 'AVG' | 'CONCAT');
}
/** 流程表单字段编码规则明细编辑DTO */
export interface IEditTheDTOForProcessFormFieldEncodingRuleDetails {
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
/** 流程表单字段下拉选项关联显示编辑DTO */
export interface IProcessFormFieldDropDownOptionAssociatedDisplayEditDTO {
    /** 下拉选项的code */
    selectorItemCode?: string;
    /** 关联显示字段的序列号集合 */
    associateDisplayFieldSerialNos?: string[];
}
/** 流程表单关联表单筛选条件组编辑DTO */
export interface IProcessFormAssociatedFormFilterGroupEditDTO {
    /** 条件组名称 */
    name?: string;
    /** 条件集 */
    filters?: IProcessFormAssociatedFormFilterEditDTO[];
    /** 是否系统默认条件组，条件集 => Y 表示系统默认条件组（每个字段有且最多只有1个系统默认条件组），N - 用户自定义条件组 */
    isSystemDefault?: ('Y' | 'N');
}
/** 流程表单关联表单筛选条件编辑DTO */
export interface IProcessFormAssociatedFormFilterEditDTO {
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: ('EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'IN' | 'NOT_IN' | 'IS_NULL' | 'NOT_NULL' | 'RANGE' | 'NOT_RANGE' | 'DYNAMIC_RANGE' | 'CONTAINER' | 'NOT_CONTAINER' | 'REGEXP' | 'NOT_REGEXP' | 'JSON_ARRAY_EQ' | 'JSON_ARRAY_NE' | 'JSON_ARRAY_IN' | 'JSON_ARRAY_NOT_IN' | 'JSON_ARRAY_CONTAINER' | 'JSON_ARRAY_NOT_CONTAINER' | 'JSON_IS_NULL' | 'JSON_NOT_NULL');
    /** 判断对象类型 */
    compareObjType?: ('FORM_RP' | 'CURRENT' | 'CUSTOM' | 'CUSTOM_DATE');
    /** 判断对象字段序号值 */
    compareColumnSerialNo?: string;
    /** 判断对象字段的关联表单字段序列号 */
    compareColumnRpFormFieldSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: ('YESTERDAY' | 'TODAY' | 'LAST_WEEK' | 'THIS_WEEK' | 'LAST_MONTH' | 'THIS_MONTH' | 'LAST_YEAR' | 'THIS_YEAR');
    /** 是否使用日期的显示格式来做筛选 - Y 代表将使用显示格式来做数据筛选。-N 代表不使用显示格式作为数据筛选。  */
    isUseDateShowFormat?: ('Y' | 'N');
    /** 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑 */
    isDisableEdit?: ('Y' | 'N');
}
/** 流程表单关联表单填充编辑DTO */
export interface IProcessFormAssociatedFormFillEditDTO {
    /** 被采取的字段序号值 */
    columnSerialNo?: string;
    /** 被采取的字段序号值的下级字段序号值， 这里的序列号 - 来自于主体/主表 */
    secondarySourceFieldSerialNo?: string;
    /** 被采取的字段序号值的下级字段编码，这里的编码 - 来自于主体/主表  */
    secondarySourceFieldCode?: string;
    /** 填充到的目标字段序号值 */
    fillFormFieldSerialNo?: string;
    /** 字段填充方式 */
    fillWay?: ('NONE' | 'LAST' | 'CONCAT' | 'SUM');
    /** 是否禁用编辑- 默认是 N */
    isDisableEdited?: ('Y' | 'N');
    /** 是否允许修改填充内容- 默认是 Y */
    isAllowModificationOfFillContent?: ('Y' | 'N');
}
/** FlowPathFormFieldDataLinkageEditDTO */
export interface IFlowPathFormFieldDataLinkageEditDTO {
    /** id */
    id?: number;
    /** 数据来源应用编码（即联动表单） */
    sourceFormRpCode?: string;
    /** 数据来源应用表格编码（即联动表单） */
    sourceFormDetailRpCode?: string;
    /** 数据来源字段编码（取值字段编号） */
    sourceFieldCode?: string;
    /** 数据来源字段序列号（取值字段的序列号） */
    sourceFieldSerialNo?: string;
    /** 筛选条件组集 */
    filterGroups?: IProcessFormAssociatedFormFilterGroupEditDTO[];
}
/** FlowPathFormFieldValueLimitRuleEditDTO */
export interface IFlowPathFormFieldValueLimitRuleEditDTO {
    /** 值限制规则条件 */
    limitRuleCondition?: ('EQ' | 'GT' | 'GE' | 'LT' | 'LE');
    /** 值限制规则类型 */
    limitRuleType?: ('NO_LIMIT' | 'FIXED_VALUE' | 'FORMULA');
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: Record<string, any>[];
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
}
/** 流程节点编辑DTO_4 */
export interface IProcessNodeEditDTO4 {
    /** id */
    id?: number;
    /** 节点类型 */
    type: ('EXECUTE' | 'APPROVAL' | 'BRANCHES' | 'CHILD');
    /** 名称 */
    name: string;
    /** 序号值 - 由前端生成，需要每个节点唯一，用于新增节点时，互相关联用 */
    serialNo: string;
    /** 序号值 - 由前端生成，需要每个节点唯一，用于新增节点时，互相关联用 */
    code: string;
    /** 负责人集 */
    leaderUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 抄送人集 */
    carbonCopyUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 审批类型 */
    approvalType?: ('ONE' | 'ALL');
    /** 是否允许回退 */
    isBack?: ('Y' | 'N');
    /** 回退类型 */
    backType?: ('ANY' | 'PREVIOUS' | 'APPOINT');
    /** 回退流程节点id - 返回指定节点时有值 */
    backFlowPathNodeId?: number;
    /** 回退流程节点序列值 - 返回指定节点时有值 */
    backFlowPathNodeSerialNo?: string;
    /** 表单操作权限集 */
    formFieldPermissions?: IProcessNodeFormOperationPermissionEditDTO[];
    /** 条件组集 - 节点类型是子分支节点时必传 */
    condiGroups?: IProcessNodeConditionBranchGroupEditDTO[];
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent: ('Y' | 'N');
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 是否开启超时设置 */
    enabledTimeout: ('Y' | 'N');
    /** 超时类型 */
    flowPathNodeTimeoutConfEditDtos?: IProcessNodeEditDTO1[];
    /** 下节点信息 */
    nextNode?: IProcessNodeEditDTO4;
    /** 分支子节点 - 节点类型是分支节点时必传 */
    branches?: IProcessNodeEditDTO4[];
    /** 节点启动方式 */
    launchType: ('MANUAL_OPERATION' | 'AUTOMATIC');
    /** 执行类型 */
    executeType: ('ONE' | 'ALL');
    /** 是否自定义接受按钮文案 */
    isCustomAcceptContent: ('Y' | 'N');
    /** 自定义接受按钮文案 */
    customAcceptContent?: string;
    /** 是否显示流程接受按钮 */
    isShowAcceptButton?: ('Y' | 'N');
    /** 是否自定义同意按钮文案 */
    isCustomPassApprovalContent: ('Y' | 'N');
    /** 自定义同意按钮文案 */
    customPassApprovalContent?: string;
    /** 是否自定义拒绝按钮文案 */
    isCustomRefuseApprovalContent: ('Y' | 'N');
    /** 自定义拒绝按钮文案 */
    customRefuseApprovalContent?: string;
    /** 是否显示流程拒绝按钮 */
    isShowRefuseButton?: ('Y' | 'N');
    /** 是否自定义回退按钮文案 */
    isCustomBackContent: ('Y' | 'N');
    /** 自定义回退按钮文案 */
    customBackContent?: string;
    /** 是否显示流程回退按钮 */
    isShowBackButton?: ('Y' | 'N');
    /** 消息配置列表 */
    messageConfigList?: ITheProcessNodeEditsTheDTO[];
    /** 是否启用接受超时 */
    isEnabledAcceptTimeout?: ('Y' | 'N');
    /** 审批人来自, 默认是当前节点审批 */
    approverFrom?: ('CURRENT_NODE_ASSIGNMENT' | 'PREVIOUS_NODE_ASSIGNMENT');
    /** 上一节点限制指定范围 */
    previousNodeAssignmentRange?: ('NO_LIMIT' | 'LIMIT');
    /** 上一节点选项人员集合 */
    previousNodeUserOptions?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 是否启用转交 */
    enabledTransfer?: ('Y' | 'N');
    /** 自定义转交按钮文案 */
    customTransferContent?: string;
    /** 转交人员范围 */
    transferScopeType?: ('CLASSIFIED' | 'ALL');
    /** 转交人集 */
    transferUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 是否启用表单暂存 */
    enableFormStaging?: ('Y' | 'N');
    /** 自定义表单暂存文本 */
    customFormStagingContent?: string;
    /** 是否自定义流程开始按钮文案 */
    isCustomBeginningContent: ('Y' | 'N');
    /** 自定义流程开始按钮文案 */
    customBeginningContent?: string;
    /** 是否显示开始按钮 */
    isShowBeginningButton?: ('Y' | 'N');
    /** 是否启用流程开始超时 */
    isEnabledBeginningTimeout?: ('Y' | 'N');
}
/** 流程节点执行人编辑DTO */
export interface ITheProcessNodeExecutiveEditsTheDTO {
    /** id */
    executorId?: number;
    /** 执行人类型 */
    executorType?: ('USER' | 'ROLE' | 'DEPARTMENT' | 'CLASS_GROUP' | 'SYS_CONTROL');
    /** 执行人系统类型 */
    executorSysType?: ('CREATE_BY' | 'CREATE_DEPARTMENT' | 'FLOW_PATH_TASK_PLAN');
    /** 组织字段序列 - 即动态控件 */
    organizationFieldSerialNo?: string;
}
/** 流程节点表单操作权限编辑DTO */
export interface IProcessNodeFormOperationPermissionEditDTO {
    /** id */
    id?: number;
    /** 表单序号值(整数) - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    flowPathFormFieldSerialNo: string;
    /** 权限类型 */
    permissionsType: ('EDIT' | 'READONLY' | 'HIDDEN');
    /** 表格内权限类型 */
    tableFormFieldPermissions: IProcessNodeFormOperationPermissionEditDTO[];
}
/** 流程节点条件分支组编辑DTO */
export interface IProcessNodeConditionBranchGroupEditDTO {
    /** id */
    id?: number;
    /** 条件集 */
    condis?: IEditDtosForProcessNodeConditions[];
}
/** 流程节点条件编辑DTO */
export interface IEditDtosForProcessNodeConditions {
    /** id */
    id?: number;
    /** 条件类型 */
    type?: ('DEFAULT' | 'FORM_FIELD');
    /** 默认条件-条件类型为系统内置时有值 */
    defaultCondi?: ('HANDLE_USER');
    /** 表单字段id-条件类型为表单字段时有值 */
    flowPathFormFieldId?: number;
    /** 表单序号值 - 由前端生成，需要每个字段唯一，用于新增时，互相关联用 */
    flowPathFormFieldSerialNo: string;
    /** 判断方式 */
    compareMode?: ('EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'IN' | 'NOT_IN' | 'IS_NULL' | 'NOT_NULL' | 'RANGE' | 'NOT_RANGE' | 'DYNAMIC_RANGE' | 'CONTAINER' | 'NOT_CONTAINER' | 'REGEXP' | 'NOT_REGEXP' | 'JSON_ARRAY_EQ' | 'JSON_ARRAY_NE' | 'JSON_ARRAY_IN' | 'JSON_ARRAY_NOT_IN' | 'JSON_ARRAY_CONTAINER' | 'JSON_ARRAY_NOT_CONTAINER' | 'JSON_IS_NULL' | 'JSON_NOT_NULL');
    /** 判断目标来源 */
    compareTargetFromSource?: ('FORM_RP' | 'CURRENT' | 'CUSTOM' | 'CUSTOM_DATE');
    /** 关联表单-比较目标字段ID */
    targetFieldId?: number;
    /** 关联表单-比较目标字段序列 */
    targetFieldSerialNo?: string;
    /** 关联表单-比较目标字段编码 */
    targetFieldCode?: string;
    /** 自定义-比较值 */
    compareValue?: string;
    /** 自定义-日期动态区间 */
    dateDynamicRange?: ('YESTERDAY' | 'TODAY' | 'LAST_WEEK' | 'THIS_WEEK' | 'LAST_MONTH' | 'THIS_MONTH' | 'LAST_YEAR' | 'THIS_YEAR');
    /** 选项值 */
    selectorValues?: string[];
    /** 前端Meta */
    frontendMeta?: string;
}
/** 流程节点编辑DTO_1 */
export interface IProcessNodeEditDTO1 {
    /** id */
    id?: number;
    /** 超时的步骤类型 */
    stepType?: ('COMMITTED' | 'ACCEPT' | 'BEGINNING');
    /** 超时类型 */
    timeoutType?: ('CUSTOM' | 'FORM_FIELD');
    /** 超时值 - 超时类型为自定义时有值 */
    timeoutTimeValue?: number;
    /** 超时值类型 - 超时类型为自定义时有值 */
    timeoutTimeType?: ('DAY' | 'HOUR' | 'MINUTE');
    /** 超时表单字段id */
    timeoutFlowPathFormFieldId?: number;
    /** 超时表单字段序列值 */
    timeoutFlowPathFormFieldSerialNo?: string;
    /** 预警处理方式 */
    earlyWarningHandleType?: ('NOT_HANDLE' | 'SEND');
    /** 预警超时前发送通知 超时值 */
    earlyWarningTimeValue?: number;
    /** 预警超时前发送通知 超时值类型 */
    earlyWarningTimeType?: ('DAY' | 'HOUR' | 'MINUTE');
    /** 预警提醒人集 */
    earlyWarningUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 预警提醒方式 */
    earlyWarningSendType?: ('MESSAGE');
    /** 超时处理方式 */
    timeoutHandleType?: ('NOT_HANDLE' | 'AUTO');
    /** 超时后通知类型 */
    timeoutAfterSendType?: ('NOT_SEND' | 'AUTO');
    /** 超时提醒人集 */
    timeoutUsers?: ITheProcessNodeExecutiveEditsTheDTO[];
    /** 超时通知方式 */
    timeoutSendType?: ('MESSAGE');
    /** 消息配置列表 */
    messageConfigList?: ITheProcessNodeEditsTheDTO[];
}
/** 流程节点编辑DTO */
export interface ITheProcessNodeEditsTheDTO {
    /** id */
    id?: number;
    /** 消息触发时机 */
    triggerTiming?: ('APPROVER_COMMIT_AFTER' | 'PROCESS_NODE_COMPLETED' | 'COMMIT_TIMEOUT_BEFORE' | 'COMMIT_TIMEOUT_AFTER' | 'ACCEPTANCE_AFTER' | 'ACCEPTANCE_TIMEOUT_BEFORE' | 'ACCEPTANCE_TIMEOUT_AFTER' | 'BEGINNING_AFTER' | 'BEGINNING_TIMEOUT_BEFORE' | 'BEGINNING_TIMEOUT_AFTER' | 'RETURN_AFTER' | 'APPROVER_APPROVAL_AFTER' | 'APPROVAL_NODE_COMPLETED' | 'APPROVER_APPROVAL_REJECTED' | 'TRANSFER_AFTER');
    /** 消息配置ID列表 */
    messageConfigIdList?: number[];
    /** 是否启用消息通知 */
    isEnabledMessageNotification?: ('Y' | 'N');
    /** 引用的ID。比如超时配置 */
    refId?: number;
}
/** 流程表单权限编辑DTO */
export interface IProcessFormPermissionsEditDTO {
    /** 角色权限集 */
    rolePermissions?: IProcessRolePermissionDTO[];
    /** 表单控制 - 编辑权限列表 */
    editPermissionList?: IFlowPathEditPermissionEditDTO[];
    /** 表单控制 - 新增权限列表 */
    addPermissionList?: IFlowPathAddPermissionEditDTO[];
    /** 表单控制 - 查询权限列表 */
    queryPermissionList?: IFlowPathQueryPermissionEditDTO[];
    /** 表单控制 - 复制权限列表 */
    copyPermissionList?: IFlowPathCopyPermissionEditDTO[];
}
/** 流程角色权限DTO */
export interface IProcessRolePermissionDTO {
    /** 角色id */
    roleId?: number;
    /** 新增权限码集 */
    addPermissionCodes?: string[];
    /** 删除权限码集 */
    removePermissionCodes?: string[];
    /** 数据权限集 */
    dataAuthList?: IProcessRoleDataPermissionDTO[];
}
/** 流程角色数据权限DTO */
export interface IProcessRoleDataPermissionDTO {
    /** 数据权限类型 */
    dataAuthType?: ('SELF' | 'DEPT' | 'ALL' | 'FLOW_FIELD');
    /** 数据权限类型 */
    roleDataAuthFieldList?: IProcessRoleDataPermissionFieldDTO[];
}
/** 流程角色数据权限字段DTO */
export interface IProcessRoleDataPermissionFieldDTO {
    /** 流程表单字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 流程表单字段名 */
    flowPathFormFieldName?: string;
}
/** FlowPathEditPermissionEditDTO */
export interface IFlowPathEditPermissionEditDTO {
    /** 流程状态 */
    flowStatus?: ('HANDLING' | 'COMPLETE' | 'NOT_PASS' | 'STAGING' | 'INVALID');
    /** 是否可编辑 */
    isEditable?: ('Y' | 'N');
    /** 是否禁用 */
    isDisabled?: ('Y' | 'N');
}
/** FlowPathAddPermissionEditDTO */
export interface IFlowPathAddPermissionEditDTO {
    /** 流程字段编码 */
    flowPathFormFieldCode?: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 权限类型 */
    type?: ('EDIT' | 'READONLY' | 'HIDDEN');
}
/** FlowPathQueryPermissionEditDTO */
export interface IFlowPathQueryPermissionEditDTO {
    /** 流程字段编码 */
    flowPathFormFieldCode?: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 是否可见 */
    isVisible?: ('Y' | 'N');
}
/** FlowPathCopyPermissionEditDTO */
export interface IFlowPathCopyPermissionEditDTO {
    /** 流程字段编码 */
    flowPathFormFieldCode?: string;
    /** 流程字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 是否能够复制 */
    isCanCopy?: ('Y' | 'N');
}
/** 流程事件编辑DTO */
export interface IProcessEventEditDTO {
    /** 标题 */
    title?: string;
    /** 是否系统预设 */
    isSystemPreset?: ('Y' | 'N');
    /** 触发流程节点序号值列表 */
    triggerFlowPathNodeSerialNoList?: string[];
    /** 触发事件的时机- 即事件不是由流程提交触发，而是因为某个事件发生触发-例如当流程完成后触发该事件 */
    triggerEventTiming?: ('FLOW_COMPLETED_POST');
    /** 操作表单类型 */
    operateFormType?: ('FLOW' | 'FLOW_TABLE');
    /** 操作目标表单code */
    operateFormCode?: string;
    /** 操作方式 */
    operateType?: ('UPDATE' | 'UPDATE_STORAGE_IN' | 'UPDATE_STORAGE_OUT' | 'UPDATE_RECEIVED' | 'UPDATE_RECEIVABLE' | 'UPDATE_PAID' | 'UPDATE_PAYABLE' | 'INSERT');
    /** 触发条件生效设置 */
    validSetting?: IProcessEventSettingsEditDTO;
    /** 触发条件失效设置 */
    invalidSetting?: IProcessEventSettingsEditDTO;
    /** 是否触发流程 -- 针对新增数据事件而言 */
    isTriggerFlow?: ('Y' | 'N');
    /** 套件类型-仅针对套件的事件有效 */
    kitType?: ('STORAGE_IN' | 'STORAGE_OUT' | 'STORAGE_OUT_STORAGE' | 'STORAGE_MOVE' | 'STORAGE_MOVE_STORAGE' | 'RECEIVED' | 'RECEIVABLE' | 'RECEIVABLE_COLLECTION' | 'PAID' | 'PAYABLE' | 'PAYABLE_PAYMENT' | 'BILL_DATE');
}
/** 流程事件设置编辑DTO */
export interface IProcessEventSettingsEditDTO {
    /** 子表新增方式 -- 针对新增事件 */
    childFormInsertType?: ('ALL' | 'FILTER');
    /** 是否直接删除目标表单 -- 针对新增事件 */
    isDirectDeleteTargetForm?: ('Y' | 'N');
    /** 在指定的表格编码的维度上新增数据 -- 针对新增事件。如果为空，则维度以主表的维度来新增数据，不为空，则以指定明细表的维度来新增数据） */
    addDataInDimensionWhereTableCode?: string;
    /** 新增业务事件-明细分组 */
    detailGroup?: ITheBasisForInsertingTheServiceEventDetailDataGroup;
    /** 流程事件操作设置编辑集 */
    operateSettings?: IProcessEventOperationSettingsEditTheDTO[];
    /** 触发条件筛选组 */
    triggerConditionFilterGroups?: IEditTheDTOForTheProcessEventActionFilterGroup[];
    /** 流程事件操作筛选条件组集 */
    operateFilterGroups?: IEditTheDTOForTheProcessEventActionFilterGroup[];
    /** 流程事件子表设置集合 -- 针对新增事件 */
    insertEventChildFormSettings?: IApplyTheNewEventSubtableToSetTheRequestDTO[];
}
/** 插入业务事件-明细数据分组的依据 */
export interface ITheBasisForInsertingTheServiceEventDetailDataGroup {
    /** 是否对明细数据进行分组 */
    isGroup?: ('Y' | 'N');
    /** 分组依据-表格字段类型编码 */
    groupingTableCode?: string;
    /** 分组依据-表格字段类型的序列号 */
    groupingTableSerialNo?: string;
    /** 分组依据-分组字段序列号列表 */
    groupingFieldSerialNoList?: string[];
}
/** 流程事件操作设置编辑DTO */
export interface IProcessEventOperationSettingsEditTheDTO {
    /** 操作赋值字段序号值(目标.字段序列号）) */
    operateColumnSerialNo?: string;
    /** 值来源类型 */
    sourceType?: ('FORM' | 'FIXED' | 'FORMULA' | 'NULL');
    /** 表单字段序号值(源.一级字段序列号) */
    formFieldSerialNo?: string;
    /** 表单字段序号值(源.二级字段序列号) */
    secondarySourceFieldSerialNo?: string;
    /** 表单字段序号值(源.二级字段序编码) */
    secondarySourceFieldCode?: string;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: IProcessFormFormulaFieldDTO[];
    /** 固定值 */
    fixedValue?: string;
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
    /** 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑 */
    isDisableEdit?: ('Y' | 'N');
}
/** 流程事件操作筛选条件组编辑DTO */
export interface IEditTheDTOForTheProcessEventActionFilterGroup {
    /** 条件组名称 */
    name?: string;
    /** 条件集 */
    filters?: IProcessEventActionFilterEditDTO[];
}
/** 流程事件操作筛选条件编辑DTO */
export interface IProcessEventActionFilterEditDTO {
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: ('EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'IN' | 'NOT_IN' | 'IS_NULL' | 'NOT_NULL' | 'RANGE' | 'NOT_RANGE' | 'DYNAMIC_RANGE' | 'CONTAINER' | 'NOT_CONTAINER' | 'REGEXP' | 'NOT_REGEXP' | 'JSON_ARRAY_EQ' | 'JSON_ARRAY_NE' | 'JSON_ARRAY_IN' | 'JSON_ARRAY_NOT_IN' | 'JSON_ARRAY_CONTAINER' | 'JSON_ARRAY_NOT_CONTAINER' | 'JSON_IS_NULL' | 'JSON_NOT_NULL');
    /** 判断对象类型 */
    compareObjType?: ('FORM_RP' | 'CURRENT' | 'CUSTOM' | 'CUSTOM_DATE');
    /** 判断对象字段序号值 */
    compareColumnSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: ('YESTERDAY' | 'TODAY' | 'LAST_WEEK' | 'THIS_WEEK' | 'LAST_MONTH' | 'THIS_MONTH' | 'LAST_YEAR' | 'THIS_YEAR');
}
/** 应用新增事件子表设置请求DTO */
export interface IApplyTheNewEventSubtableToSetTheRequestDTO {
    /** 字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 字段序列号 */
    filterGroups?: IApplyTheNewEventSubtableConditionGroupToRequestTheDTO[];
}
/** 应用新增事件子表条件组请求DTO */
export interface IApplyTheNewEventSubtableConditionGroupToRequestTheDTO {
    /** 条件组名称 */
    name?: string;
    /** 条件集 */
    filters?: IApplyTheNewEventSubtableFilterToRequestADTO[];
}
/** 应用新增事件子表筛选条件请求DTO */
export interface IApplyTheNewEventSubtableFilterToRequestADTO {
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: ('EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'IN' | 'NOT_IN' | 'IS_NULL' | 'NOT_NULL' | 'RANGE' | 'NOT_RANGE' | 'DYNAMIC_RANGE' | 'CONTAINER' | 'NOT_CONTAINER' | 'REGEXP' | 'NOT_REGEXP' | 'JSON_ARRAY_EQ' | 'JSON_ARRAY_NE' | 'JSON_ARRAY_IN' | 'JSON_ARRAY_NOT_IN' | 'JSON_ARRAY_CONTAINER' | 'JSON_ARRAY_NOT_CONTAINER' | 'JSON_IS_NULL' | 'JSON_NOT_NULL');
    /** 判断对象类型 */
    compareObjType?: ('FORM_RP' | 'CURRENT' | 'CUSTOM' | 'CUSTOM_DATE');
    /** 判断对象字段序号值 */
    compareColumnSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 自定义值回显 */
    compareCustomValueEcho?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: ('YESTERDAY' | 'TODAY' | 'LAST_WEEK' | 'THIS_WEEK' | 'LAST_MONTH' | 'THIS_MONTH' | 'LAST_YEAR' | 'THIS_YEAR');
}
/** 流程打印模板编辑DTO */
export interface IProcessPrintTemplateEditDTO {
    /** 流程打印模板id */
    id?: number;
    /** 模板名称 */
    name?: string;
    /** 模板结构代码 */
    templateStructure?: string;
    /** 打印类型 */
    printType?: ('SINGLE_LINE' | 'MULTI_LINE');
}
/** PublishEnterpriseRouterEditDTO */
export interface IPublishEnterpriseRouterEditDTO {
    /** 上级路由ID */
    parentRouteId?: number;
    /** 所属排序位置-前端给的值不代表真实的顺序，仅仅代表该应用在第几号位置, 排在第一个，则排序位置为1，排在第二个则排序位置为2，依次类推 */
    sortOffset?: number;
}
/** 代办配置 */
export interface IAgencyAllocation {
    /** 代办编辑服务 */
    id?: number;
    /** 标题配置 */
    title?: string;
    /** 字段序列号列表 */
    titleFieldSerialNoList?: string[];
    /** 内容字段序列号列表 */
    contentFieldSerialNoList?: string[];
}
/** FlowPathDetailPageConfigEditDTO */
export interface IFlowPathDetailPageConfigEditDTO {
    /** ID */
    id?: number;
    /** 引用当前表单的应用引擎编码 */
    refFlowPathCode?: string;
    /** 页签名称/别名 */
    aliasName?: string;
    /** 分组列表 */
    filterGroupList?: IConditionGroup1[];
}
/** 条件组_1 */
export interface IConditionGroup1 {
    /** 过滤组的ID */
    id?: number;
    /** 分页配置ID */
    flowPathDetailPageConfigId?: number;
    /** 过滤列表 */
    filterList?: ISetOfConditions[];
}
/** 条件组 */
export interface ISetOfConditions {
    /** 过滤条件的ID */
    id?: number;
    /** 所属流程表单关联表单筛选条件组id */
    flowPathDetailPageFilterGroupId?: number;
    /** 所属流程表单字段id */
    flowPathDetailPageConfigId?: number;
    /** 被判断的字段序列号 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: ('EQ' | 'NE' | 'GT' | 'GE' | 'LT' | 'LE' | 'IN' | 'NOT_IN' | 'IS_NULL' | 'NOT_NULL' | 'RANGE' | 'NOT_RANGE' | 'DYNAMIC_RANGE' | 'CONTAINER' | 'NOT_CONTAINER' | 'REGEXP' | 'NOT_REGEXP' | 'JSON_ARRAY_EQ' | 'JSON_ARRAY_NE' | 'JSON_ARRAY_IN' | 'JSON_ARRAY_NOT_IN' | 'JSON_ARRAY_CONTAINER' | 'JSON_ARRAY_NOT_CONTAINER' | 'JSON_IS_NULL' | 'JSON_NOT_NULL');
    /** 判断对象类型 */
    compareObjType?: ('FORM_RP' | 'CURRENT' | 'CUSTOM' | 'CUSTOM_DATE');
    /** 判断对象字段code */
    compareColumnSerialNo?: string;
    /** 判断对象字段的关联表单字段序列号 */
    compareColumnRpFormFieldSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: ('YESTERDAY' | 'TODAY' | 'LAST_WEEK' | 'THIS_WEEK' | 'LAST_MONTH' | 'THIS_MONTH' | 'LAST_YEAR' | 'THIS_YEAR');
    /** 是否使用日期的显示格式来做为筛选条件 */
    isUseDateShowFormat?: ('Y' | 'N');
}
/** JSONResult«流程版本响应VO» */
export interface IJSONResultProcessVersionRespondsToVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessVersionRespondsToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程版本响应VO */
export interface ITheProcessVersionRespondsToVO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 所属流程id */
    flowPathId?: number;
    /** 版本排名 */
    versionRank?: number;
    /** 是否是系统流程 */
    isSystem?: ('Y' | 'N');
    /** 名称 */
    name?: string;
    /** 编号 */
    code?: string;
    /** 简介 */
    description?: string;
    /** 发布终端值合计 */
    publishTotal?: number;
    /** 是否是多流程 */
    isMultiFlow?: ('Y' | 'N');
}
