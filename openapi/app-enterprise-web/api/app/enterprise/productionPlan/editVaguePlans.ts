import { post } from '@/api/http';
 
// http://47.108.139.107:16400/doc.html#/default/任务下发相关/editVagueUsingPOST
export default function fetchMethod(data: IProductionOrderStepSchedulingEditDTO1) {
    return post<IJSONResultobject['data']>({
      url: "/app-enterprise-web/api/app/enterprise/productionPlan/editVaguePlans",
      data,
    });
}
// 生产订单步骤排产编辑DTO_1
export interface IProductionOrderStepSchedulingEditDTO1 {
    // 排产计划id
    id: number;
    // 步骤排产集
    stepPlans: IProductionOrderStepSchedulingEditDTO[];
}
// 生产订单步骤排产编辑DTO
export interface IProductionOrderStepSchedulingEditDTO {
    // 步骤排产id
    id: number;
    // 工艺路径步骤id
    routingStepId: number;
    // 工序id
    processId: number;
    // 工序名称
    processName: string;
    // 工序编号
    processCode: string;
    // 计划开始时间, yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00
    beginTime: string;
    // 计划结束时间, yyyy-MM-dd HH:mm:ss 选择到分，秒数补位00
    endTime: string;
}
// JSONResult«object»
export interface IJSONResultobject {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: Record<string, any>;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
