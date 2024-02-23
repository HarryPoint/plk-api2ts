import { http } from '@/api/http';

// http://47.108.139.107:16700/doc.html#/default/流程工单相关/getByBusinessIdUsingGET
export default function fetchMethod(params: { businessId: number; enterpriseId: number }, extraOptions?: any) {
    return http<IJSONResultProcessWorkOrderVO>(
        {
            url: "/masterdata-service/flowPathWorkOrder/getByBusinessId",
            method: "get",
            params,
        },
        extraOptions,
    );
}
// JSONResult«流程工单VO»
export interface IJSONResultProcessWorkOrderVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessWorkOrderVO;
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程工单VO
export interface IProcessWorkOrderVO {
    // id
    id: number;
    // 数据状态 0停用，1启用，-1已删除
    dataStatus: number;
    // 创建员工id
    createUserId: number;
    // 创建部门id
    createDeptId: number;
    // 创建时间
    createTime: string;
    // 修改账户id
    updateUserId: number;
    // 修改部门id
    updateDeptId: number;
    // 更新时间
    updateTime: string;
    // 工单号
    workOrderCode: string;
    // 业务数据id
    businessId: number;
    // 所属数据code
    businessCode: string;
    // 所属流程id
    flowPathId: number;
    // 所属流程版本id
    flowPathVersionId: number;
    // 流程版本号
    flowPathVersionRank: number;
    // 当前所在节点id
    currentFlowPathNodeId: number;
    // 计划开始时间
    planBeginTime: string;
    // 状态
    status: string;
    // 完成时间
    completeTime: string;
    // 总耗时秒
    totalTime: number;
    // 总超时秒
    totalTimeoutTime: number;
    // 当前总任务数量 - 即当前流转的任务总量
    currentTotalTaskCount: number;
    // 当前总超时任务数量
    currentTotalTimeoutTaskCount: number;
}
