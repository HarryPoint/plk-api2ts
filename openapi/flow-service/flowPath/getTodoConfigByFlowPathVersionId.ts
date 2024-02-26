import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程相关/getTodoConfigByFlowPathVersionIdUsingGET
*/
export default function fetchMethod(params: { flowPathVersionId: number }, extraOptions?: any) {
    return http<IJSONResultTheProcessCustomNotificationFieldRespondsToVO>(
        {
            url: "/flow-service/flowPath/getTodoConfigByFlowPathVersionId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«流程自定义通知字段响应VO» */
export interface IJSONResultTheProcessCustomNotificationFieldRespondsToVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: ITheProcessCustomNotificationFieldRespondsToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 流程自定义通知字段响应VO */
export interface ITheProcessCustomNotificationFieldRespondsToVO {
    /** id */
    id: number;
    /** 所属企业id */
    enterpriseId: number;
    /** 所属流程id */
    flowPathId: number;
    /** 所属流程版本id */
    flowPathVersionId: number;
    /** 流程版本号 */
    flowPathVersionRank: number;
    /** 标题定义 */
    title: string;
    /** 标题字段序列号列表 */
    titleFieldSerialNoList: string[];
    /** 内容字段序号列表 */
    contentFieldSerialNoList: string[];
}
