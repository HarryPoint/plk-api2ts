import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/生产异常类型相关/getAbnormalTypeUsingGET_1
*/
export default function fetchMethod(options: { params: { type?: ('SCRAP' | 'HOLD' | 'HOLD_PAUSE' | 'REPORT' | 'BACK' | 'CANCEL_TASK'); enterpriseId?: number } }, extraOptions?: any) {
    return http<ITheJSONResultListExceptionTypeReturnsVO>(
        {
            url: "/masterdata-service/produceAbnormalCategory/getAbnormalType",
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
    type?: ('SCRAP' | 'HOLD' | 'HOLD_PAUSE' | 'REPORT' | 'BACK' | 'CANCEL_TASK');
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
