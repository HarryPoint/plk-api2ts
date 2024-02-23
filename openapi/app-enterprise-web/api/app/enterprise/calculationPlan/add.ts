import { http } from '@/api/http';

// http://47.108.139.107:16400/doc.html#/default/计算方案相关/addUsingPOST_1
export default function fetchMethod(data: IComputingSolutionAddedARequestDTO) {
    return http<IJSONResultlong>({
        url: "/app-enterprise-web/api/app/enterprise/calculationPlan/add",
        method: "post",
        data,
    });
}
// 计算方案新增请求DTO
export interface IComputingSolutionAddedARequestDTO {
    // 名称
    name: string;
    // 应用编码
    appCode: string;
    // 表格字段编码
    tableFieldCode: string;
    // 是否明细业务
    isDetailFlow: string;
    // 公式类型
    formulaType: string;
    // 公式
    formula: string;
    // 计算模式
    calculationMode: string;
    // 固定时间
    fixedTime: string;
    // 计算周期
    calculationPeriod: string;
    // 过滤条件列表
    filterConditionList: ICalculationSchemeFilterConditionDTO2[];
}
// 计算方案过滤条件DTO_2
export interface ICalculationSchemeFilterConditionDTO2 {
    // 字段序列号
    fieldSerialNo: string;
    // 值列表
    values: string[];
}
// JSONResult«long»
export interface IJSONResultlong {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: number;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
