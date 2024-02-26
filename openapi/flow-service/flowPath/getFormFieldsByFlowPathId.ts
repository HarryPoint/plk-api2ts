import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/getFormFieldsByFlowPathIdUsingPOST
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; flowPathId?: number } }, extraOptions?: any) {
    return http<IJSONResultListProcessFormVO>(
        {
            url: "/flow-service/flowPath/getFormFieldsByFlowPathId",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程表单VO»» */
export interface IJSONResultListProcessFormVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessFormVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程表单VO */
export interface IProcessFormVO {
    /** id */
    id?: number;
    /** 所属流程id */
    flowPathId?: number;
    /** 所属流程版本id */
    flowPathVersionId?: number;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 类型分组 */
    typeGroup?: EProcessFormVO_typeGroup;
    /** 类型 */
    type: EProcessFormVO_type;
    /** 是否是表格内字段 */
    isTableField?: EProcessFormVO_isTableField;
    /** 类型描述 */
    typeDesc?: string;
    /** 表格类型 */
    tableType?: EProcessFormVO_tableType;
    /** 是否是系统表单字段 */
    isSystem?: EProcessFormVO_isSystem;
    /** 是否是系统预置字段 */
    isSystemPreset?: EProcessFormVO_isSystemPreset;
    /** 是否是系统必填字段 */
    isSystemMust?: EProcessFormVO_isSystemMust;
    /** 是否在表格中展示列 */
    isTableShow?: EProcessFormVO_isTableShow;
    /** 是否是套件 */
    isKit?: EProcessFormVO_isKit;
    /** 套件类型 */
    kitType?: EProcessFormVO_kitType;
    /** 套件字段类型 */
    kitColumnType?: EProcessFormVO_kitColumnType;
    /** 选择类型 */
    selectorType?: EProcessFormVO_selectorType;
    /** 名称 */
    name: string;
    /** code */
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
    defaultType?: EProcessFormVO_defaultType;
    /** 默认日期类型 */
    defaultDateType?: EProcessFormVO_defaultDateType;
    /** 默认值 - 多选、起止时间、图片、附件，都以json数组对象传来，例如：["xxx", "xxx2", "xxx3"] */
    defaultValue?: string;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: ITheProcessFormFormulaFieldReturnsVO[];
    /** 编码规则 */
    codeNumberRules?: IProcessFormFieldEncodingRuleDetailsVO[];
    /** 是否必填 */
    isMust?: EProcessFormVO_isMust;
    /** 允许扫码 */
    isScan?: EProcessFormVO_isScan;
    /** 数值类型 */
    numberType?: EProcessFormVO_numberType;
    /** 小数位数 */
    scaleDigit?: number;
    /** 是否允许负数 */
    canNegative?: EProcessFormVO_canNegative;
    /** 数值格式 */
    numberFormat?: EProcessFormVO_numberFormat;
    /** 日期类型 */
    dateType?: EProcessFormVO_dateType;
    /** 选项集 - json数组 */
    selectors?: string;
    /** 选项集 */
    selectorList?: IFormFieldOption[];
    /** 选项集字典 */
    selectorDictionaryList?: IProcessFormFieldAssociationDictionaryOptionSetVO[];
    /** 下拉选项关联显示列表 */
    selectorAssociateDisplayList?: ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO[];
    /** 选项值来源 */
    selectorOptionSource?: EProcessFormVO_selectorOptionSource;
    /** 选项值来源业务编码 */
    selectorOptionSourceBusinessCode?: EProcessFormVO_selectorOptionSourceBusinessCode;
    /** 选项值是否可修改 */
    isCanModifySelectorOption?: EProcessFormVO_isCanModifySelectorOption;
    /** 关联表单code */
    formRpCode?: string;
    /** 关联详细表单的编码 */
    formDetailRpCode?: string;
    /** 关联表单选项显示字段code */
    formRpSelectorShowFieldCode?: string;
    /** 关联表单选项显示字段Serial No */
    formRpSelectorShowFieldSerialNo?: string;
    /** 关联表单筛选条件组集 */
    formRpFilterGroups?: IProcessFormsAssociateFormFilterGroupVO[];
    /** 关联表单填充规则集 */
    formRpFills?: IProcessFormAssociatedFormFillVO[];
    /** 表格自定义字段集 */
    tableCustomFormFields?: IProcessFormVO[];
    /** 选择框样式 */
    style?: EProcessFormVO_style;
    /** 关联表单展示code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"}] */
    formRpShowFields?: Record<string, any>[];
    /** 关联表单多选分组字段code集合 --数据格式[{"code":"字段1编码", serialNo:"字段1SerialNo", "name":"字段1名称"},{"code":"字段2编码", serialNo:"字段2SerialNo", "name":"字段2名称"}] */
    formRpMultiGroupFields?: Record<string, any>[];
    /** 排序 */
    sort?: number;
    /** 父级流程表单id */
    parentFlowPathFormFieldId?: number;
    /** 父级流程表单编码 */
    parentFlowPathFormFieldCode?: string;
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
    /** 组织类型 */
    organizationType?: EProcessFormVO_organizationType;
    /** 表格字段列表 */
    actualFields?: Record<string, any>[];
    /** 是否自动获取位置 */
    isAutoGetLocation?: EProcessFormVO_isAutoGetLocation;
    /** 地址类型 */
    addressType?: EProcessFormVO_addressType;
    /** 不允许重复 */
    unableRepeat?: EProcessFormVO_unableRepeat;
    /** 表格内不允许重复 */
    unableRepeatInTable?: EProcessFormVO_unableRepeatInTable;
    /** 重复提示 */
    repeatTip?: string;
    /** 是否使用有账号的员工 */
    isUseEmployeesWithAccounts?: EProcessFormVO_isUseEmployeesWithAccounts;
    /** 关联查询显示样式 */
    associationQueryShowStyle?: EProcessFormVO_associationQueryShowStyle;
    /** 数据联动 */
    dataLinkage?: IFlowPathFormFieldDataLinkageVO;
    /** 字段值限制规则 */
    valueLimitRules?: IFlowPathFormFieldValueLimitRuleEditDTO[];
    /** 是否启用超链接 */
    isHyperlinkEnabled?: EProcessFormVO_isHyperlinkEnabled;
    /** 是否表格内批量选择 */
    isInsideTableBatchSelect?: EProcessFormVO_isInsideTableBatchSelect;
    /** 当动态控件选择了当前字段后，对应取关联表单的值是 */
    dynamicControlValueFieldSerialNo?: string;
    /** 处理人显示字段序列号 */
    processorShowFieldSerialNo?: string;
    /** 处理人显示字段编码 */
    processorShowFieldCode?: string;
}
/** 流程表单公式字段返回VO */
export interface ITheProcessFormFormulaFieldReturnsVO {
    /** 类型 */
    type: ETheProcessFormFormulaFieldReturnsVO_type;
    /** 计算公式用到的表单序号值 */
    serialNo: string;
    /** 用到的函数类型 */
    funType?: ETheProcessFormFormulaFieldReturnsVO_funType;
}
/** 流程表单字段编码规则明细VO */
export interface IProcessFormFieldEncodingRuleDetailsVO {
    /** id */
    id?: number;
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
/** 流程表单字段关联字典选项集VO */
export interface IProcessFormFieldAssociationDictionaryOptionSetVO {
    /** undefined */
    color?: string;
    /** undefined */
    name?: string;
    /** 预设名称 */
    presetName?: string;
    /** undefined */
    code?: string;
    /** 是否预设 */
    isPreset?: EProcessFormFieldAssociationDictionaryOptionSetVO_isPreset;
    /** 能否修改 */
    isCanModify?: EProcessFormFieldAssociationDictionaryOptionSetVO_isCanModify;
    /** 能否删除 */
    isCanDelete?: EProcessFormFieldAssociationDictionaryOptionSetVO_isCanDelete;
}
/** 流程表单字段下拉选项关联显示VO */
export interface ITheProcessFormFieldDropDownOptionIsAssociatedToDisplayVO {
    /** 所属流程表单字段id */
    flowPathFormFieldId?: number;
    /** 所属流程表单字段编号 */
    flowPathFormFieldCode?: string;
    /** 所属流程表单字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 下拉选项的code */
    selectorItemCode?: string;
    /** 关联显示字段的序列号集合 */
    associateDisplayFieldSerialNos?: Record<string, any>[];
}
/** 流程表单关联表单筛选条件组VO */
export interface IProcessFormsAssociateFormFilterGroupVO {
    /** id */
    id?: number;
    /** 条件组名称 */
    name?: string;
    /** 条件集 */
    filters?: IProcessFormsAssociateFormFilterVO[];
    /** 是否系统默认条件组，条件集 => Y 表示系统默认条件组（每个字段有且最多只有1个系统默认条件组），N - 用户自定义条件组 */
    isSystemDefault?: EProcessFormsAssociateFormFilterGroupVO_isSystemDefault;
    /** 数据联动ID */
    dataLinkageId?: number;
    /** 表单字段ID */
    flowPathFormFieldId?: number;
}
/** 流程表单关联表单筛选条件VO */
export interface IProcessFormsAssociateFormFilterVO {
    /** id */
    id?: string;
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: EProcessFormsAssociateFormFilterVO_compareType;
    /** 判断对象类型 */
    compareObjType?: EProcessFormsAssociateFormFilterVO_compareObjType;
    /** 判断对象字段序号值 */
    compareColumnSerialNo?: string;
    /** 判断对象字段的关联表单字段序列号 */
    compareColumnRpFormFieldSerialNo?: string;
    /** 判断对象自定义值 */
    compareCustomValue?: string;
    /** 自定义值回显 */
    compareCustomValueEcho?: string;
    /** 所属流程表单关联表单筛选条件组id */
    flowPathFormFieldFormRpFilterGroupId?: number;
    /** 区间范围 -- 下限 */
    rangeLowerLimit?: string;
    /** 区间范围 -- 上限 */
    rangeUpperLimit?: string;
    /** 日期动态范围 */
    dateDynamicRange?: EProcessFormsAssociateFormFilterVO_dateDynamicRange;
    /** 是否使用日期的显示格式来做筛选 - Y 代表将使用显示格式来做数据筛选。-N 代表不使用显示格式作为数据筛选。  */
    isUseDateShowFormat?: EProcessFormsAssociateFormFilterVO_isUseDateShowFormat;
    /** 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑 */
    isDisableEdit?: EProcessFormsAssociateFormFilterVO_isDisableEdit;
}
/** 流程表单关联表单填充VO */
export interface IProcessFormAssociatedFormFillVO {
    /** id */
    id?: number;
    /** 所属流程表单字段id */
    flowPathFormFieldId?: number;
    /** 被采取的字段序号值 */
    columnSerialNo?: string;
    /** 被采取的字段序号值的下级字段序号值 */
    secondarySourceFieldSerialNo?: string;
    /** 被采取的字段序号值的下级字段编码 */
    secondarySourceFieldCode?: string;
    /** 填充到的目标字段序号值 */
    fillFormFieldSerialNo?: string;
    /** 字段填充方式 */
    fillWay?: EProcessFormAssociatedFormFillVO_fillWay;
    /** 是否警用编辑 */
    isDisableEdited?: EProcessFormAssociatedFormFillVO_isDisableEdited;
    /** 是否允许修改填充内容- 默认是 Y */
    isAllowModificationOfFillContent?: EProcessFormAssociatedFormFillVO_isAllowModificationOfFillContent;
}
/** FlowPathFormFieldDataLinkageVO */
export interface IFlowPathFormFieldDataLinkageVO {
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
    filterGroups?: IProcessFormsAssociateFormFilterGroupVO[];
}
/** FlowPathFormFieldValueLimitRuleEditDTO */
export interface IFlowPathFormFieldValueLimitRuleEditDTO {
    /** 值限制规则条件 */
    limitRuleCondition?: EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleCondition;
    /** 值限制规则类型 */
    limitRuleType?: EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleType;
    /** 计算公式 */
    formula?: string;
    /** 计算公式用到的表单序号值集 */
    formulaFormFieldSerialNos?: Record<string, any>[];
    /** 前端配置拓展字段 */
    meta?: Record<string, Record<string, any>>;
}

export enum EProcessFormVO_typeGroup {
    /** 表单 */
    FORM = "FORM",
    /** 样式 */
    STYLE = "STYLE"
}

export enum EProcessFormVO_type {
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

export enum EProcessFormVO_isTableField {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_tableType {
    /** 默认类型 */
    DEFAULT = "DEFAULT"
}

export enum EProcessFormVO_isSystem {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isSystemPreset {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isSystemMust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isTableShow {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isKit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_kitType {
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

export enum EProcessFormVO_kitColumnType {
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

export enum EProcessFormVO_selectorType {
    /** 平铺 */
    FLAT = "FLAT",
    /** 下拉 */
    PULL_DOWN = "PULL_DOWN"
}

export enum EProcessFormVO_defaultType {
    /** 固定值 */
    FIXED = "FIXED",
    /** 计算公式 */
    FORMULA = "FORMULA",
    /** 数据联动 */
    DATA_LINKAGE = "DATA_LINKAGE"
}

export enum EProcessFormVO_defaultDateType {
    /** 未配置 */
    NONE = "NONE",
    /** 系统时间 */
    SYSTEM = "SYSTEM",
    /** 固定时间 */
    FIX = "FIX"
}

export enum EProcessFormVO_isMust {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isScan {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_numberType {
    /** 整数 */
    INTEGER = "INTEGER",
    /** 小数 */
    DECIMAL = "DECIMAL"
}

export enum EProcessFormVO_canNegative {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_numberFormat {
    /** % */
    F1 = "F1",
    /** ￥ */
    F2 = "F2",
    /** $ */
    F3 = "F3",
    /** 金额大写 */
    F4 = "F4"
}

export enum EProcessFormVO_dateType {
    /** 年 */
    DAY = "DAY",
    /** 年 */
    MIN = "MIN",
    /** 年 */
    SECOND = "SECOND",
    /** 时:分 */
    HOUR_MIN = "HOUR_MIN",
    /** 年 */
    MONTH = "MONTH",
    /** 年 */
    YEAR = "YEAR"
}

export enum EProcessFormVO_selectorOptionSource {
    /** 默认填充 */
    DEFAULT_FILL = "DEFAULT_FILL",
    /** 系统字典 */
    SYSTEM_DICTIONARY = "SYSTEM_DICTIONARY"
}

export enum EProcessFormVO_selectorOptionSourceBusinessCode {
    /** 物料种类 */
    MATERIAL_TYPE = "MATERIAL_TYPE",
    /** 部门组织分类 */
    DEPARTMENT_ORG_CATEGORY = "DEPARTMENT_ORG_CATEGORY",
    /** 部门组织类型 */
    DEPARTMENT_ORG_TYPE = "DEPARTMENT_ORG_TYPE",
    /** 项目类型 */
    PROJECT_TYPE = "PROJECT_TYPE",
    /** 项目大类 */
    PROJECT_CATEGORY = "PROJECT_CATEGORY",
    /** 项目任务优先级 */
    PROJECT_TASK_PRIORITY = "PROJECT_TASK_PRIORITY",
    /** 项目行动项类型 */
    PROJECT_ACTION_ITEM_TYPE = "PROJECT_ACTION_ITEM_TYPE",
    /** 项目反馈周期 */
    PROJECT_FEEDBACK_CYCLE = "PROJECT_FEEDBACK_CYCLE",
    /** 项目会议类型 */
    PROJECT_MEETING_TYPE = "PROJECT_MEETING_TYPE",
    /** 项目密级类型 */
    PROJECT_SECRET_TYPE = "PROJECT_SECRET_TYPE",
    /** 监视频率 */
    QMS_ANNUAL_QUALITY_MONITOR_RATE = "QMS_ANNUAL_QUALITY_MONITOR_RATE",
    /** 定性目标值 */
    QMS_QUALITATIVE_TARGET_VALUE = "QMS_QUALITATIVE_TARGET_VALUE",
    /** 质量工作计划完成情况 */
    QMS_QUALITY_WORK_PLAN_COMPLETE_STATUS = "QMS_QUALITY_WORK_PLAN_COMPLETE_STATUS",
    /** 内部审核检查记录结果 */
    QMS_INTERNAL_AUDIT_AND_INSPECTION_RESULT = "QMS_INTERNAL_AUDIT_AND_INSPECTION_RESULT",
    /** 内部审核不符合项程度 */
    QMS_INTERNAL_AUDIT_LEVEL_OF_NON_CONFORMANCE = "QMS_INTERNAL_AUDIT_LEVEL_OF_NON_CONFORMANCE",
    /** 验证结果 */
    QMS_INTERNAL_AUDIT_CORRECTIVE_RESULT = "QMS_INTERNAL_AUDIT_CORRECTIVE_RESULT",
    /** 验证结果 */
    QMS_EXTERNAL_AUDIT_CORRECTIVE_RESULT = "QMS_EXTERNAL_AUDIT_CORRECTIVE_RESULT",
    /** 验证结果 */
    QMS_SPECIAL_AUDIT_CORRECTIVE_RESULT = "QMS_SPECIAL_AUDIT_CORRECTIVE_RESULT",
    /** 内部审核实施计划成员分工类型 */
    QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN_WORK_TYPE = "QMS_INTERNAL_AUDIT_IMPLEMENTATION_PLAN_WORK_TYPE",
    /** 外部审核不符合项报告不符合程度 */
    QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE = "QMS_EXTERNAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE",
    /** 专项审核检查记录检查结果 */
    QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS_INSPECTION_RESULT = "QMS_SPECIAL_AUDIT_AND_INSPECTION_RECORDS_INSPECTION_RESULT",
    /** 专项审核不符合项报告不符合程度 */
    QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE = "QMS_SPECIAL_AUDIT_NON_CONFORMANCE_REPORT_LEVEL_OF_NON_CONFORMANCE",
    /** 国标文件 */
    QMS_SAMPLING_STANDARDS_NATIONAL_DOCUMENTS = "QMS_SAMPLING_STANDARDS_NATIONAL_DOCUMENTS",
    /** 质量人员授权检验职务 */
    QMS_QUALITY_PERSONNEL_AUTHORIZED_INSPECTION_DUTIES = "QMS_QUALITY_PERSONNEL_AUTHORIZED_INSPECTION_DUTIES",
    /** 质量人员工作形式 */
    QMS_QUALITY_PERSONNEL_WORKING_FORM = "QMS_QUALITY_PERSONNEL_WORKING_FORM",
    /** 质量人员分组 */
    QMS_QUALITY_PERSONNEL_GROUP = "QMS_QUALITY_PERSONNEL_GROUP",
    /** 质量人员证书名称 */
    QMS_QUALITY_PERSONNEL_CERTIFICATE_NAME = "QMS_QUALITY_PERSONNEL_CERTIFICATE_NAME",
    /** 质量人员状态 */
    QMS_QUALITY_PERSONNEL_CERTIFICATE_STATUS = "QMS_QUALITY_PERSONNEL_CERTIFICATE_STATUS",
    /** 领用所需资质 */
    QMS_SEAL_STYLE_QUALIFICATION = "QMS_SEAL_STYLE_QUALIFICATION",
    /** 印章状态 */
    QMS_SEAL_STATUS = "QMS_SEAL_STATUS",
    /** 所属分类 */
    QMS_ANNUAL_QUALITY_TARGET_CATEGORY = "QMS_ANNUAL_QUALITY_TARGET_CATEGORY",
    /** AQL */
    QMS_SAMPLING_STANDARDS_AQL = "QMS_SAMPLING_STANDARDS_AQL",
    /** 样本量字码 */
    QMS_SAMPLING_STANDARDS_CHARACTER_CODE = "QMS_SAMPLING_STANDARDS_CHARACTER_CODE",
    /** 抽样水平 */
    QMS_SAMPLING_STANDARDS_LEVEL = "QMS_SAMPLING_STANDARDS_LEVEL",
    /** 来料类型 */
    QMS_INSPECTION_INCOMING_TYPE = "QMS_INSPECTION_INCOMING_TYPE",
    /** 评审结果 */
    QMS_PROJECT_TASK_REVIEW_RESULT = "QMS_PROJECT_TASK_REVIEW_RESULT",
    /** 决策结果 */
    QMS_PROJECT_TASK_DECISION_RESULT = "QMS_PROJECT_TASK_DECISION_RESULT",
    /** 检验任务业务类型 */
    QMS_INSPECTION_BUSINESS_TYPE = "QMS_INSPECTION_BUSINESS_TYPE",
    /** 维修能力 */
    DEVICE_EMPLOYEE_MAINTAIN_LEVEL = "DEVICE_EMPLOYEE_MAINTAIN_LEVEL"
}

export enum EProcessFormVO_isCanModifySelectorOption {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_style {
    /** 高级 */
    ADVANCED = "ADVANCED",
    /** 级联 */
    CASCADE = "CASCADE"
}

export enum EProcessFormVO_organizationType {
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

export enum EProcessFormVO_isAutoGetLocation {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_addressType {
    /** 省 */
    REGION_AND_DETAIL_ADDRESS = "REGION_AND_DETAIL_ADDRESS",
    /** 省 */
    REGION = "REGION",
    /** 省 */
    STREET_AND_DETAIL_ADDRESS = "STREET_AND_DETAIL_ADDRESS",
    /** 省 */
    STREET = "STREET"
}

export enum EProcessFormVO_unableRepeat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_unableRepeatInTable {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isUseEmployeesWithAccounts {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_associationQueryShowStyle {
    /** 单行 */
    SINGLE = "SINGLE",
    /** 表格 */
    TABLE = "TABLE"
}

export enum EProcessFormVO_isHyperlinkEnabled {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormVO_isInsideTableBatchSelect {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum ETheProcessFormFormulaFieldReturnsVO_type {
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 流程表单字段 */
    FORM_FIELD = "FORM_FIELD"
}

export enum ETheProcessFormFormulaFieldReturnsVO_funType {
    /** 无函数 */
    DEFAULT = "DEFAULT",
    /** 求和 */
    SUM = "SUM",
    /** 最大值 */
    MAX = "MAX",
    /** 最小值 */
    MIN = "MIN",
    /** 平均值 */
    AVG = "AVG",
    /** 合并 */
    CONCAT = "CONCAT"
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

export enum EProcessFormFieldAssociationDictionaryOptionSetVO_isPreset {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldAssociationDictionaryOptionSetVO_isCanModify {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormFieldAssociationDictionaryOptionSetVO_isCanDelete {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormsAssociateFormFilterGroupVO_isSystemDefault {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormsAssociateFormFilterVO_compareType {
    /** 等于 */
    EQ = "EQ",
    /** 不等于 */
    NE = "NE",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE",
    /** 属于 */
    IN = "IN",
    /** 不属于 */
    NOT_IN = "NOT_IN",
    /** 是空 */
    IS_NULL = "IS_NULL",
    /** 非空 */
    NOT_NULL = "NOT_NULL",
    /** 区间 */
    RANGE = "RANGE",
    /** 不在区间 */
    NOT_RANGE = "NOT_RANGE",
    /** 动态区间 */
    DYNAMIC_RANGE = "DYNAMIC_RANGE",
    /** 包含 */
    CONTAINER = "CONTAINER",
    /** 不包含 */
    NOT_CONTAINER = "NOT_CONTAINER",
    /** 正则 */
    REGEXP = "REGEXP",
    /** NOT 正则 */
    NOT_REGEXP = "NOT_REGEXP",
    /** JSON 数组 等于 */
    JSON_ARRAY_EQ = "JSON_ARRAY_EQ",
    /** JSON 数组 不等于 */
    JSON_ARRAY_NE = "JSON_ARRAY_NE",
    /** JSON 数组 IN */
    JSON_ARRAY_IN = "JSON_ARRAY_IN",
    /** JSON 数组 NOT_IN */
    JSON_ARRAY_NOT_IN = "JSON_ARRAY_NOT_IN",
    /** JSON 数组包含 */
    JSON_ARRAY_CONTAINER = "JSON_ARRAY_CONTAINER",
    /** JSON 数组不包含 */
    JSON_ARRAY_NOT_CONTAINER = "JSON_ARRAY_NOT_CONTAINER",
    /** JSON 是空 */
    JSON_IS_NULL = "JSON_IS_NULL",
    /** JSON 非空 */
    JSON_NOT_NULL = "JSON_NOT_NULL"
}

export enum EProcessFormsAssociateFormFilterVO_compareObjType {
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 自定义值 */
    CUSTOM = "CUSTOM",
    /** 自定义日期 */
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum EProcessFormsAssociateFormFilterVO_dateDynamicRange {
    /** 昨天 */
    YESTERDAY = "YESTERDAY",
    /** 今天 */
    TODAY = "TODAY",
    /** 上周 */
    LAST_WEEK = "LAST_WEEK",
    /** 本周 */
    THIS_WEEK = "THIS_WEEK",
    /** 上月 */
    LAST_MONTH = "LAST_MONTH",
    /** 本月 */
    THIS_MONTH = "THIS_MONTH",
    /** 上年 */
    LAST_YEAR = "LAST_YEAR",
    /** 本年 */
    THIS_YEAR = "THIS_YEAR"
}

export enum EProcessFormsAssociateFormFilterVO_isUseDateShowFormat {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormsAssociateFormFilterVO_isDisableEdit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFillVO_fillWay {
    /** 直接填充 */
    NONE = "NONE",
    /** 最新 */
    LAST = "LAST",
    /** 合并 */
    CONCAT = "CONCAT",
    /** 合计 */
    SUM = "SUM"
}

export enum EProcessFormAssociatedFormFillVO_isDisableEdited {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessFormAssociatedFormFillVO_isAllowModificationOfFillContent {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleCondition {
    /** 等于 */
    EQ = "EQ",
    /** 大于 */
    GT = "GT",
    /** 大于等于 */
    GE = "GE",
    /** 小于 */
    LT = "LT",
    /** 小于等于 */
    LE = "LE"
}

export enum EFlowPathFormFieldValueLimitRuleEditDTO_limitRuleType {
    /** 无限制 */
    NO_LIMIT = "NO_LIMIT",
    /** 固定值 */
    FIXED_VALUE = "FIXED_VALUE",
    /** 计算公式 */
    FORMULA = "FORMULA"
}
