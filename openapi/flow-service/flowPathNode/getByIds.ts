import { http } from '@/api/http';

// http://47.108.139.107:16500/doc.html#/default/流程节点相关/getByIdsUsingPOST_1
export default function fetchMethod(data: number[], extraOptions?: any) {
    return http<IJSONResultListProcessNodeVO>(
        {
            url: "/flow-service/flowPathNode/getByIds",
            method: "post",
            data,
        },
        extraOptions,
    );
}
// JSONResult«List«流程节点VO»»
export interface IJSONResultListProcessNodeVO {
    // 返回码
    code: number;
    // 返回消息说明
    msg: string;
    // 响应结果
    data: IProcessNodeVO[];
    // 服务器结果返回时的 Unix timestamp,单位毫秒
    ts: number;
}
// 流程节点VO
export interface IProcessNodeVO {
    // id
    id: number;
    // 所属企业id
    enterpriseId: number;
    // 所属流程id
    flowPathId: number;
    // 所属流程版本id
    flowPathVersionId: number;
    // 流程版本号
    flowPathVersionRank: number;
    // 节点业务类型
    businessType: string;
    // 节点类型
    type: string;
    // 前节点id
    previousFlowPathNodeId: number;
    // 后节点id
    nextFlowPathNodeId: number;
    // 父节点id - 子节点有值
    parentFlowPathNodeId: number;
    // 所属分支节点id - 子分支下的所有流程节点均属于当前子分支
    branchesFlowPathNodeId: number;
    // 名称
    name: string;
    // 名称
    code: string;
    // 序号值
    serialNo: string;
    // 审批类型
    approvalType: string;
    // 是否允许回退
    isBack: string;
    // 回退类型
    backType: string;
    // 回退流程节点id - 返回指定节点时有值
    backFlowPathNodeId: number;
    // 是否是首节点
    isFirst: string;
    // 节点级别 - 节点的深度
    level: number;
    // 节点步骤 - 节点横向步骤
    step: number;
    // 排序 - 节点纵向步骤
    sort: number;
    // 是否自定义提交按钮文案
    isCustomSubmitContent: string;
    // 自定义提交按钮文案
    customSubmitContent: string;
    // 是否开启超时设置
    enabledTimeout: string;
    // 节点启动方式
    launchType: string;
    // 执行类型
    executeType: string;
    // 是否自定义接受按钮文案
    isCustomAcceptContent: string;
    // 自定义接受按钮文案
    customAcceptContent: string;
    // 是否显示流程接受按钮
    isShowAcceptButton: string;
    // 是否自定义同意按钮文案
    isCustomPassApprovalContent: string;
    // 自定义同意按钮文案
    customPassApprovalContent: string;
    // 是否自定义拒绝按钮文案
    isCustomRefuseApprovalContent: string;
    // 自定义拒绝按钮文案
    customRefuseApprovalContent: string;
    // 是否显示流程拒绝按钮
    isShowRefuseButton: string;
    // 是否自定义回退按钮文案
    isCustomBackContent: string;
    // 自定义回退按钮文案
    customBackContent: string;
    // 是否显示流程回退按钮
    isShowBackButton: string;
    // 审批人来自
    approverFrom: string;
    // 是否启用转交
    enabledTransfer: string;
    // 自定义转交按钮文案
    customTransferContent: string;
    // 转交人员范围
    transferScopeType: string;
    // 是否启用表单暂存
    enableFormStaging: string;
    // 自定义表单暂存文本
    customFormStagingContent: string;
    // 是否自定义流程开始按钮文案
    isCustomBeginningContent: string;
    // 自定义流程开始按钮文案
    customBeginningContent: string;
    // 是否显示开始按钮
    isShowBeginningButton: string;
    // 是否启用流程开始超时
    isEnabledBeginningTimeout: string;
}
