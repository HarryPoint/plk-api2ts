import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/生产订单相关/useStandardTechnologyUsingPOST
export default function fetchMethod(data: IStandardProcessUseRequest, extraOptions?: any) {
    return http<IJSONResultlong>(
        {
            url: "/masterdata-service/produceOrder/useStandardTechnology",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// 标准工艺使用请求
export interface IStandardProcessUseRequest {
    // 生产订单和标准工艺关联关系列表
    itemList: IProductionOrdersAndStandardProcessRelationshipRequests[];
}
// 生产订单和标准工艺关系请求
export interface IProductionOrdersAndStandardProcessRelationshipRequests {
    // 生产订单ID
    produceOrderId: number;
    // 标准工艺ID
    standardTechnologyId: number;
    // 子物料生产订单配置请求
    childMaterialProduceOrderConfigList: ISubProductionOrderConfigurationRequest[];
    // 不需要生产子物料的生产工艺节点ID
    notProduceChildMaterialStandardTechnologyNodeIdList: number[];
}
// 子生产订单配置请求
export interface ISubProductionOrderConfigurationRequest {
    // 标准工艺路径，节点ID
    standardTechnologyNodeId: number;
    // 订单优先级，数值越大优先级越高
    priorityLevel: number;
    // 总生产数量
    totalCount: number;
    // 计划开始时间 yyyy-MM-dd HH:mm:ss
    beginTime: string;
    // 计划结束时间 yyyy-MM-dd HH:mm:ss
    endTime: string;
    // 产线
    productionLineId: number;
    // 批次信息列表
    lotOrders: IBatchEditDTO[];
}
// 批次编辑DTO
export interface IBatchEditDTO {
    // id
    id: number;
    // 批次号
    lotNo: string;
    // 批次名称
    lotName: string;
    // 总数量
    totalCount: number;
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
