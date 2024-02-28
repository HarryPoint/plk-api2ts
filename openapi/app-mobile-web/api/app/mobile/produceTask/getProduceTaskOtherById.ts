import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/生产任务相关/getProduceTaskOtherByIdUsingGET
*/
export default function fetchMethod(options: { params: { taskId?: string } }, extraOptions?: any) {
    return http<IJSONResultOtherInformationAboutTheProductionTaskVO>(
        {
            url: "/app-mobile-web/api/app/mobile/produceTask/getProduceTaskOtherById",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产任务其他信息VO» */
export interface IJSONResultOtherInformationAboutTheProductionTaskVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProductionTaskAdditionalInformationVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产任务其他信息VO */
export interface IProductionTaskAdditionalInformationVO {
    /** 任务号 */
    taskNo?: string;
    /** 优先级 */
    priorityLevel?: number;
    /** 销售订单号 */
    salesOrderCode?: string;
    /** 生产订单号 */
    produceOrderCode?: string;
    /** 成品物料id */
    materialId?: string;
    /** 成品物料名称 */
    materialName?: string;
    /** 成品物料编号 */
    materialCode?: string;
    /** 对应工序id */
    processId?: string;
    /** 对应工序名称 */
    processName?: string;
    /** 对应工序编号 */
    processCode?: string;
    /** 对应标准工艺路径id */
    routingId?: string;
    /** 对应工艺路径名称 */
    routingName?: string;
    /** 对应工艺路径编号 */
    routingCode?: string;
    /** 累积报废数量 */
    totalScrapCount?: number;
    /** 扣留数量 */
    holdCount?: number;
    /** 返工数量 */
    totalBackCount?: number;
    /** 计划开始时间 */
    beginTime?: number;
    /** 计划结束时间 */
    endTime?: number;
    /** 下发任务时间 */
    issuingTaskTime?: number;
}
