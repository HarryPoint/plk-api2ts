import { http } from '@/api/http';

/**
* @link http://47.108.139.107:17400/doc.html#/default/质检任务相关/getAbnormalTypeUsingGET_1
*/
export default function fetchMethod(options: { params: { type?: Etype } }, extraOptions?: any) {
    return http<ITheJSONResultListExceptionTypeReturnsVO>(
        {
            url: "/app-mobile-web/api/app/mobile/qualityTask/getAbnormalType",
            method: "get",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«异常类型返回VO»» */
export interface ITheJSONResultListExceptionTypeReturnsVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IExceptionTypeReturnsVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 异常类型返回VO */
export interface IExceptionTypeReturnsVO {
    /** id */
    id?: number;
    /** 所属分类 */
    type?: EExceptionTypeReturnsVO_type;
    /** 所属分类 */
    typeDesc?: string;
    /** 类型名称 */
    name?: string;
    /** 类型编号 */
    code?: string;
    /** 数据状态 */
    dataStatus?: number;
    /** 创建人 */
    createUserId?: number;
    /** 创建人姓名 */
    createUsername?: string;
    /** 创建时间 */
    createTime?: string;
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
