import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程表格相关/getByFlowPathFormFieldIdUsingPOST
*/
export default function fetchMethod(options: { params: { enterpriseId?: number; flowPathFormFieldId?: number } }, extraOptions?: any) {
    return http<IJSONResultProcessTableColumnVO>(
        {
            url: "/flow-service/flowPathTableColumn/getByFlowPathFormFieldId",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«流程表格列VO» */
export interface IJSONResultProcessTableColumnVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheProcessTableListsVO;
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
    type?: ETheProcessTableListsVO_type;
    /** 列code */
    code?: string;
    /** 列名称 */
    name?: string;
    /** 流程表单id */
    flowPathFormFieldId?: number;
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
    parentFlowPathFormFieldId?: number;
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
    /** 省 */
    REGION_AND_DETAIL_ADDRESS = "REGION_AND_DETAIL_ADDRESS",
    /** 省 */
    REGION = "REGION",
    /** 省 */
    STREET_AND_DETAIL_ADDRESS = "STREET_AND_DETAIL_ADDRESS",
    /** 省 */
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
