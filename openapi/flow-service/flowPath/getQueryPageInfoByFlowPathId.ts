import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16500/doc.html#/default/流程相关/getQueryPageInfoByFlowPathIdUsingGET
*/
export default function fetchMethod(options: { data: IProcessDataSearchVO, params: { enterpriseId?: string; flowPathId?: string } }, extraOptions?: any) {
    return http<IJSONResultDynamicDataQueryPageVO>(
        {
            url: "/flow-service/flowPath/getQueryPageInfoByFlowPathId",
            method: "GET",
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
    opUserId?: string;
    /** 操作角色id集 */
    opRoleIds?: string[];
    /** 操作部门id */
    opDeptId?: string;
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
    treeDataParentId?: string;
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
    ts?: string;
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
    id?: string;
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
    id?: string;
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
    flowPathFormFieldId?: string;
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
    flowPathFormFieldCodeNumberRuleId?: string;
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
