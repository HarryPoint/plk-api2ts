import { http } from "@/api/http";

/**
* @author lin.he
* @link http://47.108.135.148:16500/doc.html#/default/应用事件相关/listByIdListUsingPOST
*/
export default function fetchMethod(options: { data: string[] }, extraOptions?: any) {
    return http<IJSONResultListFlowPathEventQueryResponseDTO>(
        {
            url: "/flow-service/flowPathEvent/listByIdList",
            method: "POST",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«FlowPathEventQueryResponseDTO»» */
export interface IJSONResultListFlowPathEventQueryResponseDTO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IFlowPathEventQueryResponseDTO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** FlowPathEventQueryResponseDTO */
export interface IFlowPathEventQueryResponseDTO {
    /** undefined */
    id?: string;
    /** undefined */
    flowPathNodeIdList?: string[];
    /** undefined */
    title?: string;
    /** undefined */
    enterpriseId?: string;
    /** undefined */
    flowPathId?: string;
    /** undefined */
    flowPathVersionId?: string;
    /** undefined */
    operateFormType?: EFlowPathEventQueryResponseDTO_operateFormType;
    /** undefined */
    operateFormCode?: string;
    /** undefined */
    operateApplicationCode?: string;
    /** undefined */
    operateType?: EFlowPathEventQueryResponseDTO_operateType;
    /** undefined */
    triggerType?: EFlowPathEventQueryResponseDTO_triggerType;
    /** undefined */
    triggerConditionFilterGroups?: IProcessEventOperationFilterGroupQueriesDtos[];
    /** undefined */
    filterGroups?: IProcessEventOperationFilterGroupQueriesDtos[];
    /** undefined */
    detailGroup?: IInsertTheBasis2OfTheServiceEventDetailDataGroup;
    /** undefined */
    operateSettings?: IProcessEventMappingConditionGroupQueryResponse[];
    /** undefined */
    tableKitTableColumnCode?: string;
    /** undefined */
    isTriggerFlow?: EFlowPathEventQueryResponseDTO_isTriggerFlow;
    /** undefined */
    kitType?: EFlowPathEventQueryResponseDTO_kitType;
    /** undefined */
    childFormInsertType?: EFlowPathEventQueryResponseDTO_childFormInsertType;
    /** undefined */
    isDirectDeleteTargetForm?: EFlowPathEventQueryResponseDTO_isDirectDeleteTargetForm;
    /** undefined */
    childFormSettings?: IApplyTheNewEventSubtableToSetResponseDTO1[];
    /** undefined */
    addDataInDimensionWhereTableCode?: string;
}
/** 流程事件操作筛选条件组查询DTO */
export interface IProcessEventOperationFilterGroupQueriesDtos {
    /** id */
    id?: string;
    /** 条件组名称 */
    name?: string;
    /** 条件集 */
    filters?: IProcessEventOperationFilterDTO[];
    /** 操作触发类型 */
    triggerType?: EProcessEventOperationFilterGroupQueriesDtos_triggerType;
    /** 是否触发条件 - 如果是：则为触发条件、不是，则是筛选条件 */
    isTriggerCondition?: EProcessEventOperationFilterGroupQueriesDtos_isTriggerCondition;
}
/** 流程事件操作筛选条件DTO */
export interface IProcessEventOperationFilterDTO {
    /** id */
    id?: string;
    /** 操作触发类型 */
    triggerType?: EProcessEventOperationFilterDTO_triggerType;
    /** 被判断的字段序号值 */
    columnSerialNo?: string;
    /** 判断方式 */
    compareType?: EProcessEventOperationFilterDTO_compareType;
    /** 判断对象类型 */
    compareObjType?: EProcessEventOperationFilterDTO_compareObjType;
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
    dateDynamicRange?: EProcessEventOperationFilterDTO_dateDynamicRange;
}
/** 插入业务事件-明细数据分组的依据_2 */
export interface IInsertTheBasis2OfTheServiceEventDetailDataGroup {
    /** 是否对明细数据进行分组 */
    isGroup?: EInsertTheBasis2OfTheServiceEventDetailDataGroup_isGroup;
    /** 分组依据-表格字段类型编码 */
    groupingTableCode?: string;
    /** 分组依据-表格字段类型的序列号 */
    groupingTableSerialNo?: string;
    /** 分组依据-分组字段序列号列表 */
    groupingFieldSerialNoList?: string[];
}
/** 流程事件映射条件组-查询响应 */
export interface IProcessEventMappingConditionGroupQueryResponse {
    /** id */
    id?: string;
    /** 操作触发类型 */
    triggerType?: EProcessEventMappingConditionGroupQueryResponse_triggerType;
    /** 操作赋值字段序号值 */
    operateColumnSerialNo?: string;
    /** 值来源类型 */
    sourceType?: EProcessEventMappingConditionGroupQueryResponse_sourceType;
    /** 表单字段序号值 */
    formFieldSerialNo?: string;
    /** 计算公式 */
    formula?: string;
    /** 固定值 */
    fixedValue?: string;
    /** 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑 */
    isDisableEdit?: EProcessEventMappingConditionGroupQueryResponse_isDisableEdit;
    /** undefined */
    secondarySourceFieldSerialNo?: string;
    /** undefined */
    secondarySourceFieldCode?: string;
    /** undefined */
    formulaFormFieldSerialNos?: Record<string, any>[];
}
/** 应用新增事件子表设置响应DTO_1 */
export interface IApplyTheNewEventSubtableToSetResponseDTO1 {
    /** id */
    id?: string;
    /** 操作触发类型 */
    triggerType?: EApplyTheNewEventSubtableToSetResponseDTO1_triggerType;
    /** 字段id */
    flowPathFormFieldId?: string;
    /** 字段序列号 */
    flowPathFormFieldSerialNo?: string;
    /** 字段编号 */
    flowPathFormFieldCode?: string;
    /** 筛选条件组 */
    filterGroups?: IProcessEventOperationFilterGroupQueriesDtos[];
}

export enum EFlowPathEventQueryResponseDTO_operateFormType {
    FLOW = "FLOW",
    FLOW_TABLE = "FLOW_TABLE"
}

export enum EFlowPathEventQueryResponseDTO_operateType {
    UPDATE = "UPDATE",
    UPDATE_STORAGE_IN = "UPDATE_STORAGE_IN",
    UPDATE_STORAGE_OUT = "UPDATE_STORAGE_OUT",
    UPDATE_RECEIVED = "UPDATE_RECEIVED",
    UPDATE_RECEIVABLE = "UPDATE_RECEIVABLE",
    UPDATE_PAID = "UPDATE_PAID",
    UPDATE_PAYABLE = "UPDATE_PAYABLE",
    INSERT = "INSERT"
}

export enum EFlowPathEventQueryResponseDTO_triggerType {
    VALID = "VALID",
    INVALID = "INVALID"
}

export enum EFlowPathEventQueryResponseDTO_isTriggerFlow {
    Y = "Y",
    N = "N"
}

export enum EFlowPathEventQueryResponseDTO_kitType {
    STORAGE_IN = "STORAGE_IN",
    STORAGE_OUT = "STORAGE_OUT",
    STORAGE_OUT_STORAGE = "STORAGE_OUT_STORAGE",
    STORAGE_MOVE = "STORAGE_MOVE",
    STORAGE_MOVE_STORAGE = "STORAGE_MOVE_STORAGE",
    RECEIVED = "RECEIVED",
    RECEIVABLE = "RECEIVABLE",
    RECEIVABLE_COLLECTION = "RECEIVABLE_COLLECTION",
    PAID = "PAID",
    PAYABLE = "PAYABLE",
    PAYABLE_PAYMENT = "PAYABLE_PAYMENT",
    BILL_DATE = "BILL_DATE"
}

export enum EFlowPathEventQueryResponseDTO_childFormInsertType {
    ALL = "ALL",
    FILTER = "FILTER"
}

export enum EFlowPathEventQueryResponseDTO_isDirectDeleteTargetForm {
    Y = "Y",
    N = "N"
}

export enum EProcessEventOperationFilterGroupQueriesDtos_triggerType {
    /** 生效时 */
    VALID = "VALID",
    /** 失效时 */
    INVALID = "INVALID"
}

export enum EProcessEventOperationFilterGroupQueriesDtos_isTriggerCondition {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEventOperationFilterDTO_triggerType {
    /** 生效时 */
    VALID = "VALID",
    /** 失效时 */
    INVALID = "INVALID"
}

export enum EProcessEventOperationFilterDTO_compareType {
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

export enum EProcessEventOperationFilterDTO_compareObjType {
    /** 关联表单 */
    FORM_RP = "FORM_RP",
    /** 当前表单 */
    CURRENT = "CURRENT",
    /** 自定义值 */
    CUSTOM = "CUSTOM",
    /** 自定义日期 */
    CUSTOM_DATE = "CUSTOM_DATE"
}

export enum EProcessEventOperationFilterDTO_dateDynamicRange {
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

export enum EInsertTheBasis2OfTheServiceEventDetailDataGroup_isGroup {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EProcessEventMappingConditionGroupQueryResponse_triggerType {
    /** 生效时 */
    VALID = "VALID",
    /** 失效时 */
    INVALID = "INVALID"
}

export enum EProcessEventMappingConditionGroupQueryResponse_sourceType {
    /** 当前表单 */
    FORM = "FORM",
    /** 固定值 */
    FIXED = "FIXED",
    /** 计算公式 */
    FORMULA = "FORMULA",
    /** 空值 */
    NULL = "NULL"
}

export enum EProcessEventMappingConditionGroupQueryResponse_isDisableEdit {
    /** 是 */
    Y = "Y",
    /** 否 */
    N = "N"
}

export enum EApplyTheNewEventSubtableToSetResponseDTO1_triggerType {
    /** 生效时 */
    VALID = "VALID",
    /** 失效时 */
    INVALID = "INVALID"
}
