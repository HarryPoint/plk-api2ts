import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/流程相关/getQueryPageInfoByFlowPathIdUsingGET
export default function fetchMethod(data: IProcessDataSearchVO, params: { enterpriseId: number; flowPathId: number }) {
    return http<IJSONResultDynamicDataQueryPageVO>({
        url: "/flow-service/flowPath/getQueryPageInfoByFlowPathId",
        method: "get",
        data,
        params,
    });
}
// 流程数据搜索VO
export interface IProcessDataSearchVO {
    // 全局搜索
    allSearch: string;
    // 当前页面
    pageNo: number;
    // 字段搜索
    dataSearchList: IProcessDataDetailsSearchVO[];
    // 分页大小
    pageSize: number;
    // 排序字段集
    orders: IPagingSortVO[];
    // 明细表表code，传值后，将会查询明细表数据
    tableColumnCode: string;
    // 当前的表单分组
    currentFormDataGrouping: IFormDataGroupingDTO;
    // 操作员工id
    opUserId: number;
    // 操作角色id集
    opRoleIds: number[];
    // 操作部门id
    opDeptId: number;
}
// 流程数据明细搜索VO
export interface IProcessDataDetailsSearchVO {
    // 列code
    code: string;
    // 搜索类型
    searchType: string;
    // 搜索文本 - 针对文本搜索
    text: string;
    // 搜索起始值 - 针对范围搜索
    limitBegin: Record<string, any>;
    // 搜索结束值 - 针对范围搜索
    limitEnd: Record<string, any>;
    // 搜索选项值 - 针对选择搜索
    selectors: Record<string, any>[];
    // 表格编码
    tableCode: string;
}
// 分页排序VO
export interface IPagingSortVO {
    // undefined
    column: string;
    // undefined
    isAsc: string;
}
// 表单数据分组DTO
export interface IFormDataGroupingDTO {
    // 分组字段序列
    groupingFieldSerialNo: string;
    // 分组字段编码
    groupFieldCode: string;
    // 分组的值， 如果是关联表单，则是ID
    groupingValue: string;
    // 分组名称
    groupingName: string;
    // 下级分组
    children: IFormDataGroupingDTO[];
    // 级联表单数据，  级联表单的上下级关系  - Y, 多字段分组关系 - N
    cascadeFormData: string;
    // 多级基础数据上级ID
    treeDataParentId: number;
}
// JSONResult«DynamicDataQueryPageVO»
export interface IJSONResultDynamicDataQueryPageVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IDynamicDataQueryPageVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// DynamicDataQueryPageVO
export interface IDynamicDataQueryPageVO {
    // undefined
    flowPath: IFlowPathBaseVO;
    // undefined
    masterTableColumns: IFlowPathTableColumnBaseVO[];
    // undefined
    childTableColumns: IFlowPathTableColumnBaseVO[];
}
// FlowPathBaseVO
export interface IFlowPathBaseVO {
    // undefined
    id: number;
    // undefined
    code: string;
    // undefined
    lastName: string;
    // undefined
    type: string;
}
// FlowPathTableColumnBaseVO
export interface IFlowPathTableColumnBaseVO {
    // undefined
    id: number;
    // undefined
    code: string;
    // undefined
    isTableField: string;
    // undefined
    formFieldType: string;
    // undefined
    formFieldTypeGroup: string;
    // undefined
    parentFlowPathFormFieldCode: string;
    // undefined
    numberRuleDetails: INumberRuleDetailBaseVO[];
    // undefined
    flowPathFormFieldId: number;
    // undefined
    formRpCode: string;
    // undefined
    formDetailRpCode: string;
    // undefined
    formRpSelectorShowFieldCode: string;
    // undefined
    formRpSelectorShowFieldSerialNo: string;
    // undefined
    actualFields: Record<string, any>[];
    // undefined
    isAutoGetLocation: string;
    // undefined
    addressType: string;
    // undefined
    numberFormat: string;
    // undefined
    dynamicControlValueFieldSerialNo: string;
    // undefined
    processorShowFieldSerialNo: string;
    // undefined
    processorShowFieldCode: string;
    // undefined
    organizationType: string;
}
// NumberRuleDetailBaseVO
export interface INumberRuleDetailBaseVO {
    // undefined
    type: string;
    // undefined
    dateFormat: string;
    // undefined
    fixValue: string;
    // undefined
    ruleLength: number;
    // undefined
    startValue: number;
    // undefined
    stepValue: number;
    // undefined
    isCodeAccording: string;
    // undefined
    flowPathFormFieldCodeNumberRuleId: number;
}
