import { http } from '@/api/http';

/**
* @link http://47.108.139.107:16500/doc.html#/default/流程节点相关/getByIdsUsingPOST_1
*/
export default function fetchMethod(options: { data: number[] }, extraOptions?: any) {
    return http<IJSONResultListProcessNodeVO>(
        {
            url: "/flow-service/flowPathNode/getByIds",
            method: "post",
            ...options,
        },
        extraOptions,
    );
}
/** JSONResult«List«流程节点VO»» */
export interface IJSONResultListProcessNodeVO {
    /** 返回码 */
    code?: number;
    /** 返回消息说明 */
    msg?: string;
    /** 响应结果 */
    data?: IProcessNodeVO[];
    /** 服务器结果返回时的 Unix timestamp,单位毫秒 */
    ts?: number;
}
/** 流程节点VO */
export interface IProcessNodeVO {
    /** id */
    id?: number;
    /** 所属企业id */
    enterpriseId?: number;
    /** 所属流程id */
    flowPathId?: number;
    /** 所属流程版本id */
    flowPathVersionId?: number;
    /** 流程版本号 */
    flowPathVersionRank?: number;
    /** 节点业务类型 */
    businessType?: ('EXEC' | 'CONDI');
    /** 节点类型 */
    type?: ('EXECUTE' | 'APPROVAL' | 'BRANCHES' | 'CHILD');
    /** 前节点id */
    previousFlowPathNodeId?: number;
    /** 后节点id */
    nextFlowPathNodeId?: number;
    /** 父节点id - 子节点有值 */
    parentFlowPathNodeId?: number;
    /** 所属分支节点id - 子分支下的所有流程节点均属于当前子分支 */
    branchesFlowPathNodeId?: number;
    /** 名称 */
    name?: string;
    /** 名称 */
    code?: string;
    /** 序号值 */
    serialNo?: string;
    /** 审批类型 */
    approvalType?: ('ONE' | 'ALL');
    /** 是否允许回退 */
    isBack?: ('Y' | 'N');
    /** 回退类型 */
    backType?: ('ANY' | 'PREVIOUS' | 'APPOINT');
    /** 回退流程节点id - 返回指定节点时有值 */
    backFlowPathNodeId?: number;
    /** 是否是首节点 */
    isFirst?: ('Y' | 'N');
    /** 节点级别 - 节点的深度 */
    level?: number;
    /** 节点步骤 - 节点横向步骤 */
    step?: number;
    /** 排序 - 节点纵向步骤 */
    sort?: number;
    /** 是否自定义提交按钮文案 */
    isCustomSubmitContent?: ('Y' | 'N');
    /** 自定义提交按钮文案 */
    customSubmitContent?: string;
    /** 是否开启超时设置 */
    enabledTimeout?: ('Y' | 'N');
    /** 节点启动方式 */
    launchType?: ('MANUAL_OPERATION' | 'AUTOMATIC');
    /** 执行类型 */
    executeType?: ('ONE' | 'ALL');
    /** 是否自定义接受按钮文案 */
    isCustomAcceptContent?: ('Y' | 'N');
    /** 自定义接受按钮文案 */
    customAcceptContent?: string;
    /** 是否显示流程接受按钮 */
    isShowAcceptButton?: ('Y' | 'N');
    /** 是否自定义同意按钮文案 */
    isCustomPassApprovalContent?: ('Y' | 'N');
    /** 自定义同意按钮文案 */
    customPassApprovalContent?: string;
    /** 是否自定义拒绝按钮文案 */
    isCustomRefuseApprovalContent?: ('Y' | 'N');
    /** 自定义拒绝按钮文案 */
    customRefuseApprovalContent?: string;
    /** 是否显示流程拒绝按钮 */
    isShowRefuseButton?: ('Y' | 'N');
    /** 是否自定义回退按钮文案 */
    isCustomBackContent?: ('Y' | 'N');
    /** 自定义回退按钮文案 */
    customBackContent?: string;
    /** 是否显示流程回退按钮 */
    isShowBackButton?: ('Y' | 'N');
    /** 审批人来自 */
    approverFrom?: ('CURRENT_NODE_ASSIGNMENT' | 'PREVIOUS_NODE_ASSIGNMENT');
    /** 是否启用转交 */
    enabledTransfer?: ('Y' | 'N');
    /** 自定义转交按钮文案 */
    customTransferContent?: string;
    /** 转交人员范围 */
    transferScopeType?: ('CLASSIFIED' | 'ALL');
    /** 是否启用表单暂存 */
    enableFormStaging?: ('Y' | 'N');
    /** 自定义表单暂存文本 */
    customFormStagingContent?: string;
    /** 是否自定义流程开始按钮文案 */
    isCustomBeginningContent: ('Y' | 'N');
    /** 自定义流程开始按钮文案 */
    customBeginningContent?: string;
    /** 是否显示开始按钮 */
    isShowBeginningButton?: ('Y' | 'N');
    /** 是否启用流程开始超时 */
    isEnabledBeginningTimeout?: ('Y' | 'N');
}
