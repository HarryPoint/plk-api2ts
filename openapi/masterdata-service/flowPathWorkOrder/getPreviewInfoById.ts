import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16700/doc.html#/default/流程工单相关/getPreviewInfoByIdUsingGET
*/
export default function fetchMethod(params: { enterpriseId: number; id: number }, extraOptions?: any) {
    return http<IJSONResultProcessOrderPreviewInformationIsReturnedToVO>(
        {
            url: "/masterdata-service/flowPathWorkOrder/getPreviewInfoById",
            method: "get",
            params,
        },
        extraOptions,
    );
}
/** JSONResult«流程工单预览信息返回VO» */
export interface IJSONResultProcessOrderPreviewInformationIsReturnedToVO {
    /** 返回码 */
    code: number;
    /** 返回消息说明 */
    msg: string;
    /** 响应结果 */
    data: IProcessTicketPreviewInformationIsReturnedToVO;
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts: number;
}
/** 流程工单预览信息返回VO */
export interface IProcessTicketPreviewInformationIsReturnedToVO {
    /** id */
    id: number;
    /** 工单号 */
    workOrderCode: string;
    /** 提交用户id */
    createUserId: number;
    /** 提交人姓名 */
    createUsername: string;
    /** 提交人部门id */
    createDeptId: number;
    /** 提交人部门名称 */
    createDeptName: string;
    /** 提交时间 */
    createTime: string;
    /** 状态 */
    status: string;
    /** 状态描述 */
    statusDesc: string;
    /** 关闭类型 */
    closeType: string;
    /** 关闭类型描述 */
    closeTypeDesc: string;
    /** 所属流程id */
    flowPathId: number;
    /** 所属流程版本id */
    flowPathVersionId: number;
    /** 流程版本号 */
    flowPathVersionRank: number;
    /** 当前节点id */
    currentFlowPathNodeId: number;
    /** 业务数据id */
    businessId: number;
    /** 业务数据code */
    businessCode: string;
}
