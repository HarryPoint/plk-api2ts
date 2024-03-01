import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.135.148:16700/doc.html#/default/生产异常类型相关/getAbnormalTypeUsingGET_1
*/
export default function fetchMethod(options: { params: { type?: Etype; enterpriseId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListExceptionTypeReturnsVO>(
        {
            url: "/masterdata-service/produceAbnormalCategory/getAbnormalType",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«异常类型返回VO»» */
export interface ITheJSONResultListExceptionTypeReturnsVO {
    /** 返回码 */
    code?: number;
    /** 响应结果 */
    data?: IExceptionTypeReturnsVO[];
    /** 返回消息说明 */
    msg?: string;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 异常类型返回VO */
export interface IExceptionTypeReturnsVO {
    /** 类型编号 */
    code?: string;
    /** 创建时间 */
    createTime?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** id */
    id?: string;
    /** 类型名称 */
    name?: string;
    /** 所属分类 */
    type?: EExceptionTypeReturnsVO_type;
    /** 所属分类 */
    typeDesc?: string;
}

export enum Etype {
    SCRAP = "SCRAP",
    HOLD = "HOLD",
    HOLD_PAUSE = "HOLD_PAUSE",
    REPORT = "REPORT",
    BACK = "BACK",
    CANCEL_TASK = "CANCEL_TASK"
}

export enum EExceptionTypeReturnsVO_type {
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
