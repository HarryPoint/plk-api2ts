import { http } from "@/api/http";

/**
* @author 
* @link http://47.108.139.107:17400/doc.html#/default/工艺路径相关/getByIdAndCheckUsingGET
*/
export default function fetchMethod(options: { params: { processId?: string } }, extraOptions?: any) {
    return http<IJSONResultProcessDeprecatedVO>(
        {
            url: "/app-mobile-web/api/app/mobile/routing/process/getByIdAndCheck",
            method: "GET",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«ProcessDeprecatedVO» */
export interface IJSONResultProcessDeprecatedVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessDeprecatedVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: string;
}
/** ProcessDeprecatedVO */
export interface IProcessDeprecatedVO {
    /** id */
    id?: string;
    /** 所属企业id */
    enterpriseId?: string;
    /** 所属区域id */
    areaId?: string;
    /** 工序名称 */
    name?: string;
    /** 工序编号 */
    code?: string;
    /** 准备时间 */
    readyTime?: number;
    /** 准备时间单位 */
    readyTimeUnit?: EProcessDeprecatedVO_readyTimeUnit;
    /** 生产时间 */
    produceTime?: number;
    /** 生产时间单位 */
    produceTimeUnit?: EProcessDeprecatedVO_produceTimeUnit;
    /** 产出数量 */
    produceQuantity?: number;
    /** 准备工费（元） */
    readyPrice?: number;
    /** 合格产出工费（元） */
    producePrice?: number;
    /** 返工产出工费（元） */
    backProducePrice?: number;
}

export enum EProcessDeprecatedVO_readyTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}

export enum EProcessDeprecatedVO_produceTimeUnit {
    /** 秒 */
    SECOND = "SECOND",
    /** 分钟 */
    MIN = "MIN",
    /** 小时 */
    HOUR = "HOUR"
}
