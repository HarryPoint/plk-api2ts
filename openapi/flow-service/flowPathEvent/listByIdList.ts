import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/应用事件相关/listByIdListUsingPOST
export default function fetchMethod(data: number[]) {
    return http<IJSONResultListFlowPathEventQueryResponseDTO>({
        url: "/flow-service/flowPathEvent/listByIdList",
        method: "post",
        data,
    });
}
// JSONResult«List«FlowPathEventQueryResponseDTO»»
export interface IJSONResultListFlowPathEventQueryResponseDTO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IFlowPathEventQueryResponseDTO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// FlowPathEventQueryResponseDTO
export interface IFlowPathEventQueryResponseDTO {
    // undefined
    id: number;
    // undefined
    flowPathNodeIdList: number[];
    // undefined
    title: string;
    // undefined
    enterpriseId: number;
    // undefined
    flowPathId: number;
    // undefined
    flowPathVersionId: number;
    // undefined
    operateFormType: string;
    // undefined
    operateFormCode: string;
    // undefined
    operateApplicationCode: string;
    // undefined
    operateType: string;
    // undefined
    triggerType: string;
    // undefined
    triggerConditionFilterGroups: IProcessEventOperationFilterGroupQueriesDtos[];
    // undefined
    filterGroups: IProcessEventOperationFilterGroupQueriesDtos[];
    // undefined
    detailGroup: IInsertTheBasis2OfTheServiceEventDetailDataGroup;
    // undefined
    operateSettings: IProcessEventMappingConditionGroupQueryResponse[];
    // undefined
    tableKitTableColumnCode: string;
    // undefined
    isTriggerFlow: string;
    // undefined
    kitType: string;
    // undefined
    childFormInsertType: string;
    // undefined
    isDirectDeleteTargetForm: string;
    // undefined
    childFormSettings: IApplyTheNewEventSubtableToSetResponseDTO1[];
    // undefined
    addDataInDimensionWhereTableCode: string;
}
// 流程事件操作筛选条件组查询DTO
export interface IProcessEventOperationFilterGroupQueriesDtos {
    // id
    id: number;
    // 条件组名称
    name: string;
    // 条件集
    filters: IProcessEventOperationFilterDTO[];
    // 操作触发类型
    triggerType: string;
    // 是否触发条件 - 如果是：则为触发条件、不是，则是筛选条件
    isTriggerCondition: string;
}
// 流程事件操作筛选条件DTO
export interface IProcessEventOperationFilterDTO {
    // id
    id: number;
    // 操作触发类型
    triggerType: string;
    // 被判断的字段序号值
    columnSerialNo: string;
    // 判断方式
    compareType: string;
    // 判断对象类型
    compareObjType: string;
    // 判断对象字段序号值
    compareColumnSerialNo: string;
    // 判断对象自定义值
    compareCustomValue: string;
    // 自定义值回显
    compareCustomValueEcho: string;
    // 区间范围 -- 下限
    rangeLowerLimit: string;
    // 区间范围 -- 上限
    rangeUpperLimit: string;
    // 日期动态范围
    dateDynamicRange: string;
}
// 插入业务事件-明细数据分组的依据_2
export interface IInsertTheBasis2OfTheServiceEventDetailDataGroup {
    // 是否对明细数据进行分组
    isGroup: string;
    // 分组依据-表格字段类型编码
    groupingTableCode: string;
    // 分组依据-表格字段类型的序列号
    groupingTableSerialNo: string;
    // 分组依据-分组字段序列号列表
    groupingFieldSerialNoList: string[];
}
// 流程事件映射条件组-查询响应
export interface IProcessEventMappingConditionGroupQueryResponse {
    // id
    id: number;
    // 操作触发类型
    triggerType: string;
    // 操作赋值字段序号值
    operateColumnSerialNo: string;
    // 值来源类型
    sourceType: string;
    // 表单字段序号值
    formFieldSerialNo: string;
    // 计算公式
    formula: string;
    // 固定值
    fixedValue: string;
    // 禁用编辑，不填或者N代表不禁止。Y代表禁止不能编辑
    isDisableEdit: string;
    // undefined
    secondarySourceFieldSerialNo: string;
    // undefined
    secondarySourceFieldCode: string;
    // undefined
    formulaFormFieldSerialNos: Record<string, any>[];
}
// 应用新增事件子表设置响应DTO_1
export interface IApplyTheNewEventSubtableToSetResponseDTO1 {
    // id
    id: number;
    // 操作触发类型
    triggerType: string;
    // 字段id
    flowPathFormFieldId: number;
    // 字段序列号
    flowPathFormFieldSerialNo: string;
    // 字段编号
    flowPathFormFieldCode: string;
    // 筛选条件组
    filterGroups: IProcessEventOperationFilterGroupQueriesDtos[];
}
