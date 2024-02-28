import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:16700/doc.html#/default/标签设置/getProduceTagUsingGET
*/
export default function fetchMethod(options: { params: { type?: Etype; enterpriseId?: string } }, extraOptions?: any) {
    return http<ITheJSONResultListExceptionTagReturnsVO>(
        {
            url: "/masterdata-service/produceTag/getProduceTag",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«异常标签返回VO»» */
export interface ITheJSONResultListExceptionTagReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: ITheExceptionTagReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** 异常标签返回VO */
export interface ITheExceptionTagReturnsVO {
    /** id */
    id?: string;
    /** 所属分类 */
    type?: ETheExceptionTagReturnsVO_type;
    /** 所属分类 */
    typeDesc?: string;
    /** 标签名称 */
    name?: string;
    /** 标签编号 */
    code?: string;
    /** 是否启用 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: string;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: number;
}

export enum Etype {
    SCRAP = "SCRAP",
    HOLD = "HOLD",
    HOLD_PAUSE = "HOLD_PAUSE",
    REPORT = "REPORT",
    BACK = "BACK",
    CANCEL_TASK = "CANCEL_TASK"
}

export enum ETheExceptionTagReturnsVO_type {
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
