import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产异常类型相关/getVOByIdAndCheckUsingGET_1
*/
export default function fetchMethod(options: { params: { enterpriseId?: string; id?: string } }, extraOptions?: any) {
    return http<IJSONResultIndicatesTheProductionExceptionTypeVO>(
        {
            url: "/masterdata-service/produceAbnormalCategory/getVOByIdAndCheck",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«生产异常类型VO» */
export interface IJSONResultIndicatesTheProductionExceptionTypeVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IProductionExceptionTypeVO;
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 生产异常类型VO */
export interface IProductionExceptionTypeVO {
    /** 类型编号 */
    code?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** id */
    id?: string;
    /** 类型名称 */
    name?: string;
    /** 异常分类 */
    type?: EProductionExceptionTypeVO_type;
}

export enum EProductionExceptionTypeVO_type {
    /** 报废 */
    SCRAP = "SCRAP",
    /** 扣留 */
    HOLD = "HOLD",
    /** 暂扣 */
    HOLD_PAUSE = "HOLD_PAUSE",
    /** 上报反馈 */
    REPORT = "REPORT",
    /** 返工 */
    BACK = "BACK",
    /** 撤销任务 */
    CANCEL_TASK = "CANCEL_TASK"
}
